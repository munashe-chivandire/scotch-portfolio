export default function Loading() {
  return (
    <div className="fixed inset-0 z-[90] bg-bg flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="w-10 h-10 rounded-full border-2 border-border border-t-violet animate-spin" />
        <p className="font-mono text-[11px] text-fg-subtle tracking-[0.2em] uppercase">
          Loading
        </p>
      </div>
    </div>
  )
}
