import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 lg:px-8">
      <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight">
        <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[#101820] text-[#8ef3d6]">
          <ShieldCheck size={18} strokeWidth={2.4} />
        </span>
        shield<span className="text-[#12b8a6]">layer</span>
      </Link>
      <nav className="hidden items-center gap-8 text-sm font-medium text-[#66767b] md:flex">
        <Link href="/#how-it-works" className="transition hover:text-[#101820]">How it works</Link>
        <Link href="/#trust" className="transition hover:text-[#101820]">Why ShieldLayer</Link>
        <Link href="/contact" className="transition hover:text-[#101820]">Contact</Link>
      </nav>
      <Link href="/register" className="group flex items-center gap-1.5 rounded-full bg-[#101820] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#263940]">
        Create account <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </header>
  );
}
