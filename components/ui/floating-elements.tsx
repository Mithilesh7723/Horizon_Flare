"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-full animate-float" />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-secondary/20 to-transparent rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-primary/30 to-transparent rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-secondary/15 to-transparent rounded-full animate-float"
        style={{ animationDelay: "0.5s" }}
      />
    </div>
  )
}
