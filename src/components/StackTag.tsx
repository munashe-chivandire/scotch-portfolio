type TagVariant = "violet" | "electric" | "amber"

interface StackTagProps {
  label: string
  variant?: TagVariant
}

const variants: Record<TagVariant, string> = {
  violet:   "bg-violet/10 text-[#A78BFA] border border-violet/20",
  electric: "bg-electric/10 text-[#67E8F9] border border-electric/20",
  amber:    "bg-amber/10 text-[#FCD34D] border border-amber/20",
}

export default function StackTag({ label, variant = "violet" }: StackTagProps) {
  return (
    <span
      className={`font-mono text-[11px] px-2.5 py-[3px] rounded-[6px] inline-block tracking-wide ${variants[variant]}`}
    >
      {label}
    </span>
  )
}
