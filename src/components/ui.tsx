import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

type FieldProps = { label: string; hint?: string; error?: string };

export function Field({ label, hint, error, children }: FieldProps & { children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-[13px] font-semibold text-[#26363d]">{label}</label>
        {hint && <span className="text-[11px] text-[#8a989d]">{hint}</span>}
      </div>
      {children}
      {error && <p className="text-xs text-rose-600">{error}</p>}
    </div>
  );
}

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input(props, ref) {
    return (
      <input
        ref={ref}
        {...props}
        className={`h-12 w-full rounded-xl border border-[#dce5e6] bg-white px-4 text-sm text-[#17272e] outline-none transition placeholder:text-[#9ba7aa] focus:border-[#12b8a6] focus:ring-4 focus:ring-[#12b8a6]/10 disabled:cursor-not-allowed disabled:bg-[#f3f6f6] ${props.className ?? ""}`}
      />
    );
  },
);

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  function Textarea(props, ref) {
    return (
      <textarea
        ref={ref}
        {...props}
        className={`min-h-32 w-full resize-y rounded-xl border border-[#dce5e6] bg-white px-4 py-3 text-sm text-[#17272e] outline-none transition placeholder:text-[#9ba7aa] focus:border-[#12b8a6] focus:ring-4 focus:ring-[#12b8a6]/10 disabled:cursor-not-allowed disabled:bg-[#f3f6f6] ${props.className ?? ""}`}
      />
    );
  },
);
