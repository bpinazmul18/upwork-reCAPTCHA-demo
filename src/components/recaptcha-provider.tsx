"use client";

import Script from "next/script";
import { useCallback, useState } from "react";
import type { RecaptchaAction } from "@/lib/recaptcha";

declare global {
  interface Window {
    grecaptcha?: {
      ready(callback: () => void): void;
      execute(siteKey: string, options: { action: string }): Promise<string>;
    };
  }
}

export function RecaptchaProvider({ children }: { children: React.ReactNode }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <>
      {siteKey && <Script src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`} strategy="afterInteractive" />}
      {children}
    </>
  );
}

export function useRecaptcha() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [error, setError] = useState<string | null>(null);

  const executeRecaptcha = useCallback(async (action: RecaptchaAction) => {
    setError(null);

    if (!siteKey) {
      const message = "reCAPTCHA is not configured. Add NEXT_PUBLIC_RECAPTCHA_SITE_KEY and RECAPTCHA_SECRET_KEY.";
      setError(message);
      throw new Error(message);
    }

    if (!window.grecaptcha) {
      const message = "reCAPTCHA is still loading. Please try again.";
      setError(message);
      throw new Error(message);
    }

    const token = await new Promise<string>((resolve, reject) => {
      window.grecaptcha?.ready(async () => {
        try {
          resolve(await window.grecaptcha!.execute(siteKey, { action }));
        } catch {
          reject(new Error("reCAPTCHA could not create a verification token."));
        }
      });
    });

    const response = await fetch("/api/recaptcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, action }),
    });

    if (!response.ok) {
      const result = (await response.json().catch(() => null)) as { error?: string } | null;
      const message = result?.error ?? "reCAPTCHA verification failed.";
      setError(message);
      throw new Error(message);
    }

    return token;
  }, [siteKey]);

  return { executeRecaptcha, error };
}
