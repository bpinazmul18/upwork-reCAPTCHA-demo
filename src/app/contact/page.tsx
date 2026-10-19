"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Mail, MessageSquare, ShieldCheck } from "lucide-react";
import { FormEvent, useState } from "react";
import { Field, Input, Textarea } from "@/components/ui";
import { RecaptchaBadge } from "@/components/recaptcha-badge";
import { useRecaptcha } from "@/components/recaptcha-provider";
import { RECAPTCHA_ACTIONS } from "@/lib/recaptcha";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { executeRecaptcha, error } = useRecaptcha();
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    try {
      await executeRecaptcha(RECAPTCHA_ACTIONS.contact);
      setSent(true);
    } catch {
      // The hook exposes the actionable verification error to the form.
    } finally {
      setSubmitting(false);
    }
  }
  if (sent) return <main className="grid min-h-screen place-items-center bg-[#f7faf9] px-5"><div className="w-full max-w-md rounded-3xl border border-[#dcebe7] bg-white p-10 text-center shadow-sm"><div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#dff8f0] text-[#0b9c88]"><Check size={27} /></div><h1 className="mt-6 font-display text-2xl font-bold">Message sent safely</h1><p className="mt-3 text-sm leading-6 text-[#718084]">Thanks for reaching out. Our team will get back to you within one business day.</p><Link href="/" className="mt-7 inline-flex rounded-full bg-[#101820] px-5 py-3 text-sm font-semibold text-white">Return home</Link></div></main>;
  return <main className="min-h-screen bg-[#f7faf9]"><header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-7 lg:px-8"><Link href="/" className="flex items-center gap-2.5 font-display text-lg font-bold"><span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[#101820] text-[#8ef3d6]"><ShieldCheck size={18} /></span> shield<span className="text-[#12b8a6]">layer</span></Link><Link href="/register" className="text-xs font-semibold text-[#6f7f83] hover:text-[#101820]">Create an account <ArrowRight size={13} className="ml-1 inline" /></Link></header><div className="mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-12 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:pt-20"><div><Link href="/" className="mb-10 flex items-center gap-2 text-xs font-semibold text-[#7a898d]"><ArrowLeft size={14} /> Back to home</Link><p className="text-xs font-bold uppercase tracking-[.18em] text-[#12a28f]">Let&apos;s talk</p><h1 className="mt-4 max-w-md font-display text-5xl font-bold leading-[1.03] tracking-[-.05em]">We&apos;re here to help.</h1><p className="mt-5 max-w-sm text-sm leading-6 text-[#718084]">Have a question about protecting your forms? Send us a note and we&apos;ll point you in the right direction.</p><div className="mt-10 space-y-5 text-sm"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-[#12a28f] shadow-sm"><Mail size={16} /></span><span>hello@shieldlayer.dev</span></div><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-[#12a28f] shadow-sm"><MessageSquare size={16} /></span><span>Usually replies within 1 day</span></div></div></div><div className="rounded-3xl border border-[#e0e9e8] bg-white p-6 shadow-[0_20px_70px_-40px_rgba(16,53,54,.3)] sm:p-9"><h2 className="font-display text-2xl font-bold tracking-[-.03em]">Send a message</h2><p className="mt-2 text-sm text-[#7a898d]">Tell us a little about what you&apos;re building.</p><form onSubmit={submit} className="mt-7 space-y-5"><div className="grid gap-5 sm:grid-cols-2"><Field label="Your name"><Input required placeholder="Alex Morgan" /></Field><Field label="Email address"><Input required type="email" placeholder="alex@company.com" /></Field></div><Field label="Subject"><Input required placeholder="How can we help?" /></Field><Field label="Message"><Textarea required placeholder="I&apos;d love to learn more about..." /></Field><RecaptchaBadge error={error} /><button type="submit" disabled={submitting} className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#101820] text-sm font-semibold text-white transition hover:bg-[#263940] disabled:cursor-wait disabled:opacity-60">{submitting ? "Verifying…" : <>Send message <ArrowRight size={16} className="transition group-hover:translate-x-1" /></>}</button></form></div></div></main>;
}
