"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { FormEvent, useState } from "react";
import { Field, Input } from "@/components/ui";
import { RecaptchaBadge } from "@/components/recaptcha-badge";
import { useRecaptcha } from "@/components/recaptcha-provider";
import { RECAPTCHA_ACTIONS } from "@/lib/recaptcha";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { executeRecaptcha, error } = useRecaptcha();
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    try {
      await executeRecaptcha(RECAPTCHA_ACTIONS.register);
      setSubmitted(true);
    } catch {
      // The hook exposes the actionable verification error to the form.
    } finally {
      setSubmitting(false);
    }
  }
  if (submitted) return <Success title="Account request received" text="This demo form is protected by reCAPTCHA and ready to connect to your backend." />;
  return <main className="min-h-screen bg-[#f7faf9]"><div className="mx-auto grid min-h-screen max-w-6xl lg:grid-cols-[.9fr_1.1fr]"><div className="hidden flex-col justify-between bg-[#e5f8f1] p-10 lg:flex"><Link href="/" className="flex items-center gap-2.5 font-display text-lg font-bold"> <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[#101820] text-[#8ef3d6]"><ShieldCheck size={18} /></span> shield<span className="text-[#12b8a6]">layer</span></Link><div><p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-[#0c9a87]">Start with confidence</p><h1 className="max-w-sm font-display text-5xl font-bold leading-[1.04] tracking-[-.05em]">Your safest<br />first step.</h1><p className="mt-5 max-w-sm text-sm leading-6 text-[#55706f]">Create your workspace and see how a protected signup feels from the user&apos;s side.</p></div><p className="text-xs text-[#73908c]">A practical reCAPTCHA integration demo.</p></div><div className="flex flex-col px-5 py-7 sm:px-10 lg:px-20 lg:py-10"><Link href="/" className="flex items-center gap-2 text-xs font-semibold text-[#7a898d] transition hover:text-[#101820]"><ArrowLeft size={14} /> Back to home</Link><div className="mx-auto my-auto w-full max-w-md py-14"><div className="mb-8"><div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#dff8f0] text-[#0b9c88]"><ShieldCheck size={24} /></div><h2 className="font-display text-3xl font-bold tracking-[-.04em]">Create your account</h2><p className="mt-2 text-sm text-[#7a898d]">A few details and you&apos;re good to go.</p></div><form onSubmit={submit} className="space-y-5"><Field label="Full name"><Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Alex Morgan" /></Field><Field label="Work email"><Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="alex@company.com" /></Field><Field label="Password" hint="8+ characters"><div className="relative"><Input required minLength={8} type={showPassword ? "text" : "password"} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Create a secure password" className="pr-12" /><button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-[#8a989d] hover:text-[#101820]">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div></Field><RecaptchaBadge error={error} /><button type="submit" disabled={submitting} className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#101820] text-sm font-semibold text-white transition hover:bg-[#263940] disabled:cursor-wait disabled:opacity-60">{submitting ? "Verifying…" : <>Create account <ArrowRight size={16} className="transition group-hover:translate-x-1" /></>}</button><p className="text-center text-[11px] leading-5 text-[#94a0a2]">By creating an account, you agree to our Terms and Privacy Policy.</p></form></div></div></div></main>;
}

function Success({ title, text }: { title: string; text: string }) { return <main className="grid min-h-screen place-items-center bg-[#f7faf9] px-5"><div className="w-full max-w-md rounded-3xl border border-[#dcebe7] bg-white p-10 text-center shadow-sm"><div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#dff8f0] text-[#0b9c88]"><Check size={27} /></div><h1 className="mt-6 font-display text-2xl font-bold">{title}</h1><p className="mt-3 text-sm leading-6 text-[#718084]">{text}</p><Link href="/" className="mt-7 inline-flex rounded-full bg-[#101820] px-5 py-3 text-sm font-semibold text-white">Return home</Link></div></main>; }
