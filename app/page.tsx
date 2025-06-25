"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, QrCode, Shield, Zap, Download } from "lucide-react"
import WaitlistForm from "./components/waitlist-form"
import Logo from "./components/logo"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-orange-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Logo size="md" />
              <span className="text-xl font-bold text-gray-900">BitScan.Asia</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-orange-500 transition-colors">
                Features
              </a>
              <a href="#countries" className="text-gray-600 hover:text-orange-500 transition-colors">
                Countries
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-orange-500 transition-colors">
                How It Works
              </a>
              <a href="#download" className="text-gray-600 hover:text-orange-500 transition-colors">
                Download
              </a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Join Waitlist</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-200">
              Coming Soon to Southeast Asia
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Spend Your <span className="text-orange-500">Bitcoin</span> Like Local Currency
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're launching soon! Top up with Bitcoin and spend seamlessly using KHQR in Cambodia, PromptPay in
              Thailand, and in Malaysia. Join our waitlist to be the first to know.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Download className="w-5 h-5 mr-2" />
                Join Waitlist
              </Button>
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose BitScan.Asia?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get ready for the future of cross-border payments with Bitcoin-powered local spending.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-orange-100 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle className="text-gray-900">Instant Conversion</CardTitle>
                <CardDescription>
                  Convert Bitcoin to local currency instantly with real-time exchange rates.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-orange-100 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle className="text-gray-900">Secure & Regulated</CardTitle>
                <CardDescription>
                  Using top exchange level security across all supported countries.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-orange-100 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <QrCode className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle className="text-gray-900">QR Code Payments</CardTitle>
                <CardDescription>
                  Pay anywhere that accepts KHQR, PromptPay, or local QR payment systems.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Supported Countries */}
      <section id="countries" className="py-20 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Supported Countries</h2>
            <p className="text-xl text-gray-600">Spend your Bitcoin across Southeast Asia's major economies</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-orange-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🇰🇭</span>
                </div>
                <CardTitle className="text-gray-900">Cambodia</CardTitle>
                <CardDescription>KHQR Payment System</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Pay at millions of merchants using Cambodia's national QR payment standard.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-orange-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🇹🇭</span>
                </div>
                <CardTitle className="text-gray-900">Thailand</CardTitle>
                <CardDescription>PromptPay Integration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Seamless payments through Thailand's widely adopted PromptPay system.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-orange-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🇲🇾</span>
                </div>
                <CardTitle className="text-gray-900">Malaysia</CardTitle>
                <CardDescription>Local Payment Networks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Connect to Malaysia's major payment platforms and merchant networks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Will Work</h2>
            <p className="text-xl text-gray-600">Simple steps to start spending Bitcoin locally when we launch</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Top Up Bitcoin</h3>
              <p className="text-gray-600">Send Bitcoin to your BitScan wallet from any Bitcoin address or exchange.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Auto Convert</h3>
              <p className="text-gray-600">
                Your Bitcoin is automatically converted to local currency at the time of QR code payment at competitive rates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Spend Anywhere</h3>
              <p className="text-gray-600">Use QR codes to pay at any merchant that accepts local payment systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="waitlist" className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Be the First to Know</h2>
            <p className="text-xl text-orange-100 mb-8">
              BitScan.Asia is launching soon! Join our waitlist to get early access and be notified the moment we go
              live.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Logo size="md" />
                <span className="text-xl font-bold">BitScan.Asia</span>
              </div>
              <p className="text-gray-400">Bridging Bitcoin and local payments across Southeast Asia.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    API Docs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BitScan.Asia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
