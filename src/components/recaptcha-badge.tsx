"use client";

import { CheckCircle2, ShieldCheck } from "lucide-react";

export function RecaptchaBadge({ error }: { error?: string | null }) {
  return (
    <div className={`rounded-xl border px-3.5 py-3 ${error ? "border-rose-200 bg-rose-50" : "border-[#d8ebe6] bg-[#f4fcf9]"}`}>
      <div className="flex items-center gap-3">
      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#d9f7ed] text-[#0c9d8b]">
        <ShieldCheck size={17} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold text-[#28514b]">Protected by reCAPTCHA</p>
        <p className="mt-0.5 text-[10px] leading-4 text-[#71908a]">Privacy · Terms</p>
      </div>
      <CheckCircle2 size={16} className="text-[#12b8a6]" />
      </div>
      {error && <p className="mt-2 text-[11px] leading-4 text-rose-700">{error}</p>}
    </div>
  );
}
