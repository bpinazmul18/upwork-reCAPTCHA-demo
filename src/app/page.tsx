import Link from "next/link";
import { ArrowRight, Check, Fingerprint, LockKeyhole, ScanFace, ShieldCheck, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const steps = [
  { icon: ScanFace, number: "01", title: "Spot the signal", text: "Adaptive risk analysis checks every request without interrupting real people." },
  { icon: Fingerprint, number: "02", title: "Verify quietly", text: "Suspicious traffic gets a lightweight challenge. Your best users keep moving." },
  { icon: LockKeyhole, number: "03", title: "Stay protected", text: "Your forms stay clean, your team stays focused, and your data stays yours." },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative min-h-[680px] bg-[#e5f8f1]">
        <div className="absolute inset-0 noise opacity-50" />
        <SiteHeader />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-28 lg:pt-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b9e8dc] bg-white/60 px-3 py-1.5 text-xs font-semibold text-[#0b806f]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#12b8a6] pulse-ring" /> Human-first security
            </div>
            <h1 className="max-w-xl font-display text-5xl font-bold leading-[1.02] tracking-[-.055em] text-[#101820] sm:text-6xl">
              Let humans in.<br /><span className="text-[#12b8a6]">Keep bots out.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-[#55706f]">
              A friendlier layer of protection for the forms that matter. ShieldLayer makes reCAPTCHA simple, accessible, and invisible when it can be.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/register" className="group flex items-center gap-2 rounded-full bg-[#101820] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#101820]/10 transition hover:-translate-y-0.5 hover:bg-[#263940]">
                Try the demo <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
              <Link href="#how-it-works" className="rounded-full px-5 py-3.5 text-sm font-semibold text-[#375452] transition hover:bg-white/60">See how it works</Link>
            </div>
            <div className="mt-10 flex items-center gap-5 text-xs text-[#55706f]">
              <span className="flex items-center gap-1.5"><Check size={14} className="text-[#12b8a6]" /> No credit card</span>
              <span className="flex items-center gap-1.5"><Check size={14} className="text-[#12b8a6]" /> Setup in minutes</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="absolute -right-4 -top-8 h-32 w-32 rounded-full bg-[#ffd9c8] blur-2xl" />
            <div className="absolute -bottom-5 -left-6 h-28 w-28 rounded-full bg-[#a1ebdb] blur-2xl" />
            <div className="float relative rounded-[28px] border border-white/80 bg-white/85 p-5 shadow-[0_25px_80px_-25px_rgba(16,53,54,.35)] backdrop-blur">
              <div className="flex items-center justify-between border-b border-[#edf1f1] pb-4">
                <div className="flex items-center gap-2.5"><span className="grid h-8 w-8 place-items-center rounded-lg bg-[#e8faf4] text-[#10a08e]"><ShieldCheck size={17} /></span><span className="text-xs font-bold">Threat monitor</span></div>
                <span className="rounded-full bg-[#e7f9f2] px-2.5 py-1 text-[10px] font-bold text-[#12917e]">LIVE</span>
              </div>
              <div className="py-6"><p className="text-xs text-[#879496]">Requests cleared today</p><p className="mt-1 font-display text-4xl font-bold tracking-tight">24,891</p><div className="mt-5 h-20"><svg viewBox="0 0 380 80" className="h-full w-full" fill="none"><path d="M0 63C22 62 25 43 43 48C63 53 67 30 88 35C106 39 110 48 129 43C148 38 157 50 172 36C189 20 196 39 215 33C235 26 237 42 256 38C275 34 278 20 295 25C316 31 326 11 342 17C357 22 361 9 380 6" stroke="#12b8a6" strokeWidth="3" strokeLinecap="round"/><path d="M0 63C22 62 25 43 43 48C63 53 67 30 88 35C106 39 110 48 129 43C148 38 157 50 172 36C189 20 196 39 215 33C235 26 237 42 256 38C275 34 278 20 295 25C316 31 326 11 342 17C357 22 361 9 380 6V80H0V63Z" fill="url(#chartFill)" opacity=".12"/><defs><linearGradient id="chartFill" x1="190" y1="0" x2="190" y2="80"><stop stopColor="#12b8a6"/><stop offset="1" stopColor="#12b8a6" stopOpacity="0"/></linearGradient></defs></svg></div></div>
              <div className="grid grid-cols-3 gap-2 border-t border-[#edf1f1] pt-4 text-center"><div><p className="text-[10px] text-[#8b999b]">Verified</p><p className="mt-1 text-sm font-bold">98.4%</p></div><div><p className="text-[10px] text-[#8b999b]">Blocked</p><p className="mt-1 text-sm font-bold">1,204</p></div><div><p className="text-[10px] text-[#8b999b]">Latency</p><p className="mt-1 text-sm font-bold">82ms</p></div></div>
            </div>
          </div>
        </div>
      </section>
      <section id="trust" className="border-b border-[#e7edef] bg-white py-7"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-5 text-xs font-semibold tracking-wide text-[#9aa7aa] grayscale lg:justify-between lg:px-8"><span>northstar / studio</span><span>WANDER</span><span>morrow & co.</span><span>FIELD NOTES</span><span>kinetic</span></div></section>
      <section id="how-it-works" className="mx-auto max-w-6xl px-5 py-24 lg:px-8"><div className="max-w-lg"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#12a28f]">Security, without the friction</p><h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-[-.04em]">Protection that knows<br />when to be quiet.</h2></div><div className="mt-14 grid gap-5 md:grid-cols-3">{steps.map(({ icon: Icon, number, title, text }) => <div key={number} className="rounded-2xl border border-[#e4ebec] bg-white p-6"><div className="flex items-center justify-between"><div className="grid h-11 w-11 place-items-center rounded-xl bg-[#e8faf4] text-[#0fa08e]"><Icon size={21} /></div><span className="font-display text-sm font-bold text-[#c3cecf]">{number}</span></div><h3 className="mt-8 font-display text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#758286]">{text}</p></div>)}</div></section>
      <section className="bg-[#101820] px-5 py-20 text-white"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:px-8"><div><div className="mb-4 flex items-center gap-2 text-[#8ef3d6]"><Sparkles size={17} /><span className="text-xs font-bold uppercase tracking-[.18em]">Ready when you are</span></div><h2 className="max-w-xl font-display text-3xl font-bold tracking-[-.035em] sm:text-4xl">Give your forms a smarter<br />kind of welcome.</h2></div><Link href="/contact" className="flex shrink-0 items-center gap-2 rounded-full bg-[#8ef3d6] px-5 py-3.5 text-sm font-bold text-[#10221f] transition hover:bg-white">Talk to our team <ArrowRight size={16} /></Link></div></section>
      <footer className="bg-[#101820] px-5 pb-8 text-xs text-[#788a8e]"><div className="mx-auto flex max-w-6xl justify-between border-t border-white/10 pt-6 lg:px-8"><span>© 2025 ShieldLayer</span><span>Built for better forms.</span></div></footer>
    </main>
  );
}
