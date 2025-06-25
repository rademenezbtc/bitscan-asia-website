"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Mail } from "lucide-react"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
    setEmail("")
  }

  if (isSubmitted) {
    return (
      <Card className="bg-white/10 backdrop-blur border-white/20 max-w-md mx-auto">
        <CardContent className="p-6 text-center">
          <CheckCircle className="w-12 h-12 text-white mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">You're on the list!</h3>
          <p className="text-orange-100">
            We'll notify you as soon as BitScan.Asia launches. Thanks for your interest!
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white/10 backdrop-blur border-white/20 max-w-md mx-auto">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 bg-white/90 border-white/30 text-gray-900 placeholder:text-gray-500"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-white text-orange-500 hover:bg-orange-50 font-semibold"
            disabled={isLoading}
          >
            {isLoading ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
        <p className="text-orange-100 text-sm mt-4 text-center">No spam, ever. We'll only email you when we launch.</p>
      </CardContent>
    </Card>
  )
}
