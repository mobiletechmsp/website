export function Eyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.3em] text-lime ${center ? 'justify-center' : ''}`}
    >
      <span className="h-px w-8 bg-lime" />
      {children}
    </p>
  )
}
