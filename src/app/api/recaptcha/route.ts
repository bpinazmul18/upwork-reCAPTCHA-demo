import { NextResponse } from "next/server";
import { RECAPTCHA_ACTIONS, verifyRecaptchaToken, type RecaptchaAction } from "@/lib/recaptcha";

type RequestBody = { token?: string; action?: RecaptchaAction };

export async function POST(request: Request) {
  let body: RequestBody;

  try {
    body = (await request.json()) as RequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { token, action } = body;
  if (!token || !action || !Object.values(RECAPTCHA_ACTIONS).includes(action)) {
    return NextResponse.json({ error: "A valid reCAPTCHA token and action are required." }, { status: 400 });
  }

  try {
    const result = await verifyRecaptchaToken(token, action);
    if (!result.valid) {
      return NextResponse.json({ error: "reCAPTCHA verification failed." }, { status: 403 });
    }

    return NextResponse.json({ verified: true });
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return NextResponse.json({ error: "reCAPTCHA verification is not configured." }, { status: 503 });
  }
}
