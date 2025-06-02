import type React from "react"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  splitColors?: boolean
}

export function GradientText({ children, className = "", splitColors = false }: GradientTextProps) {
  if (splitColors && typeof children === 'string' && children.includes(' ')) {
    // Split the text at the first space to separate "Horizon" and "Flare"
    const parts = children.split(/ (.+)/);
    
    return (
      <span className={className}>
        <span className="text-blue-700">{parts[0]}</span>{' '}
        <span className="text-orange-600">{parts[1]}</span>
      </span>
    );
  }
  
  return (
    <span
      className={`bg-gradient-to-r from-primary via-orange-500 to-secondary bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  )
}
