import Image from "next/image"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  }

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <Image
        src="/logo.jpg"
        alt="BitScan.Asia Logo"
        width={64}
        height={64}
        className="w-full h-full object-contain rounded-lg"
        priority
      />
    </div>
  )
}
