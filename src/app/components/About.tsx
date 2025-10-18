'use client'

import React, { JSX } from 'react'
import Image from 'next/image'
import type { FC } from 'react'
import { Target, TrendingUp, Users, Zap } from 'lucide-react'
import CachetesImg from '@/app/assets/foto-about.webp'

type IconComponent = FC<React.SVGProps<SVGSVGElement>>

interface FocusPoint {
  icon: IconComponent
  title: string
  description: string
}

interface WorkStep {
  number: string
  title: string
  description: string
}

const focusPoints: FocusPoint[] = [
  { icon: Target, title: 'Outcome-Driven', description: "For me it isn't just about delivering a service, it's about achieving your business goals through clear, measurable results." },
  { icon: TrendingUp, title: 'Sustainable Growth', description: "It's not just about reaching the top, but about staying there and continuing to grow." },
  { icon: Users, title: 'Close Collaboration', description: 'I firmly believe in teamwork and open communication with my clients to achieve the best results.' },
  { icon: Zap, title: 'Constant Innovation', description: 'I am always on the lookout for new ideas and approaches to improve my projects and offer creative solutions.' },
]

const workProcess: WorkStep[] = [
  { number: '01', title: 'Discovery', description: 'First, I get to know your business, goals, and target audience to understand your unique needs.' },
  { number: '02', title: 'Strategy', description: 'I develop a personalized plan that aligns your business objectives with the best digital marketing practices.' },
  { number: '03', title: 'Execution', description: 'I implement the strategy using the most effective tools and techniques to help you achieve your goals.' },
  { number: '04', title: 'Optimization', description: 'I measure and analyze the results to make adjustments and continuous improvements to the strategy, ensuring quality and effective work.' },
]

export default function About(): JSX.Element {
  const handleContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.querySelector('#contact')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">About me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center mb-20">
          <div className="flex justify-center">
            <div className="relative group w-full max-w-[350px]">
              {/* Overlay de fondo */}
              <div className="absolute -inset-1 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300 z-0 bg-gradient-primary" />
              
              {/* Contenedor de imagen simplificado */}
              <div className="relative w-full h-auto bg-zinc-800 rounded-2xl overflow-hidden z-10 aspect-[3/4] min-h-[400px] md:min-h-0">
                <Image
                  src={CachetesImg}
                  alt="Foto personal - Angel Nava"
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 350px"
                  className="object-cover"
                  priority={true}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-text">Angel Santiago Nava Fierro</h3>
              <p className="text-lg text-accent font-medium">Freelancer | Digital Marketing & E-commerce Specialist</p>
            </div>

            <div className="space-y-4 text-text/80 leading-relaxed">
              <p>
                I&apos;m a programmer who fell in love with sales over time until one day I discovered the world of digital marketing.
                Since then I knew this was what I wanted to do because it combines both of my passions: programming and sales.
              </p>
              <p>
                Early on I helped friends and family with simple strategies, and later I decided to professionalize and offer services
                to companies so they could take advantage of their potential.
              </p>
              <p>
                I&apos;m a freelancer focused on digital marketing and web development, aiming to create my own agency to help more companies grow.
                I believe a solid digital strategy can boost any company. My approach is based on clear ideas, measurable results, and tailored solutions.
              </p>
            </div>
          </div>
        </div>

        {/* El resto de tu componente permanece igual */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-text mb-12 text-center">My Focus Points</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div
                  key={index}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-accent transition-all duration-300 group"
                >
                  <Icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-semibold text-text mb-3">{point.title}</h4>
                  <p className="text-text/70 leading-relaxed">{point.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-text mb-12 text-center">My Work Process</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workProcess.map((step, index) => (
              <div
                key={index}
                className="relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-primary transition-all duration-300"
              >
                <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent opacity-20 absolute top-4 right-4">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold text-text mb-3">{step.title}</h4>
                  <p className="text-text/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            onClick={handleContact}
            className="inline-block px-8 py-4 bg-accent-secondary hover:bg-accent-secondary/80 text-background font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Let&apos;s Work Together
          </a>
        </div>
      </div>
    </section>
  )
}