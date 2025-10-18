import React, { JSX } from 'react'
import { ArrowRight, Mail } from 'lucide-react'

export default function Hero(): JSX.Element {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />

      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Angel Nava</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-text">
              Time for your business to shine online
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-text/80 max-w-3xl mx-auto">
              Specialist in Digital Marketing & E-commerce | SEO | Full-Stack Development
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-text/70 max-w-2xl mx-auto leading-relaxed">
            Freelancer in digital marketing and web development. I optimize the online presence of businesses and
            personal brands with solutions that guarantee measurable results and a solid brand coherence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            {/* Enlaces normales: usan scroll-behavior: smooth desde globals.css */}
            <a
              href="#services"
              className="group px-8 py-4 bg-primary hover:bg-primary-light text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-glow hover:scale-105"
            >
              Check My Services Out
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="mailto:angelnavafierro@gmail.com"
              className="group px-8 py-4 bg-transparent border-2 border-accent hover:bg-accent text-accent hover:text-background font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Us via Email
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  )
}
