export function LogoMark({ className = 'h-8 w-auto' }: { className?: string }) {
  return (
    <svg viewBox="0 0 62 40" className={className} aria-hidden="true">
      <path
        fill="#fff"
        d="M0 40V5a5 5 0 0 1 5-5h23a5 5 0 0 1 5 5v35h-8.5V8.5h-3.75V40h-8.5V8.5H8.5V40z"
      />
      <path fill="#2f7bff" d="M36 0h26v8.5h-8.75V36a4 4 0 0 1-4 4H44.5V8.5H36z" />
    </svg>
  )
}

export function Logo() {
  return (
    <span className="flex items-center gap-3">
      <LogoMark />
      <span className="leading-none">
        <span className="block font-display text-[1.05rem] font-bold tracking-[0.14em] uppercase">
          MobileTech <span className="text-volt">MSP</span>
        </span>
        <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-mist">
          Computer & IT Services
        </span>
      </span>
    </span>
  )
}
