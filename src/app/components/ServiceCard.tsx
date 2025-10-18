import React, { JSX } from 'react'

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>

interface ServiceCardProps {
  icon: IconComponent
  title: string
  description: string
  features: string[]
  isHighlighted?: boolean
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  isHighlighted = false,
}: ServiceCardProps): JSX.Element {
  return (
    <div className={`relative group ${isHighlighted ? 'lg:col-span-1' : ''}`}>
      {isHighlighted && (
        <div className="absolute -top-4 right-4 z-10">
          <span className="bg-gradient-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Especialidad Principal
          </span>
        </div>
      )}

      <div
        className={`h-full bg-zinc-900/50 rounded-xl p-6 md:p-8 transition-all duration-300 border-2 ${
          isHighlighted
            ? 'border-transparent bg-gradient-to-br from-primary/20 to-transparent hover:shadow-glow'
            : 'border-zinc-800 hover:border-accent'
        } hover:-translate-y-1 hover:shadow-xl`}
      >
        <div
          className={`${
            isHighlighted ? 'w-16 h-16 md:w-20 md:h-20' : 'w-14 h-14 md:w-16 md:h-16'
          } rounded-lg bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
        >
          <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>

        <h3
          className={`${
            isHighlighted ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
          } font-bold text-text mb-4`}
        >
          {title}
        </h3>

        <p className="text-text/70 mb-6 leading-relaxed">{description}</p>

        <div className="space-y-3">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-text/80 text-sm">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
