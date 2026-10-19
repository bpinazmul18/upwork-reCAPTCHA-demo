export const RECAPTCHA_ACTIONS = {
  register: "register",
  contact: "contact",
} as const;

export type RecaptchaAction = (typeof RECAPTCHA_ACTIONS)[keyof typeof RECAPTCHA_ACTIONS];

export type RecaptchaVerification = {
  success: boolean;
  score?: number;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

export async function verifyRecaptchaToken(token: string, action: RecaptchaAction) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    throw new Error("RECAPTCHA_SECRET_KEY is not configured");
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`reCAPTCHA verification request failed with status ${response.status}`);
  }

  const result = (await response.json()) as RecaptchaVerification;
  const minimumScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? "0.5");

  return {
    valid: result.success && result.action === action && (result.score ?? 0) >= minimumScore,
    score: result.score,
    errors: result["error-codes"] ?? [],
  };
}
