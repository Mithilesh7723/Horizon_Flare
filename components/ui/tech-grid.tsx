export function TechGrid() {
  return (
    <div className="absolute inset-0 opacity-5">
      <div className="grid grid-cols-12 gap-4 h-full">
        {Array.from({ length: 144 }).map((_, i) => (
          <div
            key={i}
            className="border border-primary/20 rounded-sm"
            style={{
              animationDelay: `${i * 0.1}s`,
              animation: "fade-in 2s ease-out infinite alternate",
            }}
          />
        ))}
      </div>
    </div>
  )
}
