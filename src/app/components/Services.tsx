import React, { JSX } from 'react'
import { ShoppingCart, Search, BarChart3, Code2, Zap } from 'lucide-react'
import ServiceCard from './ServiceCard'

type Service = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
  features: string[]
  isHighlighted?: boolean
}

export default function Services(): JSX.Element {
  const services: Service[] = [
    {
      icon: ShoppingCart,
      title: 'Digital Marketing & E-commerce',
      description:
        'Optimize your sales without having to increase your advertising budget. We combine digital marketing and technical knowledge to maximize your profitability.',
      features: [
        'Personalized digital marketing strategy',
        'Management of advertising campaigns (Google Ads, Meta Ads)',
        'Conversion optimization and sales funnel',
        'Email marketing and automation',
        'Management and optimization of online stores',
      ],
      isHighlighted: true,
    },
    {
      icon: Search,
      title: 'SEO (Search Engine Optimization)',
      description:
        'Be among the first to show up on Google. By using the best SEO practices, you can improve your online visibility and attract quality organic traffic to your website.',
      features: [
        'Comprehensive SEO audit and competitor analysis',
        'Speed and user experience optimization',
        'Optimization for Google to understand your website (technical SEO)',
        'Creation of optimized content',
        'Link building and authority strategy',
      ],
      isHighlighted: true,
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & BI',
      description:
        'Transform messy data into clear, actionable insights. I help you make informed decisions based on real data to optimize your strategies and achieve your business goals.',
      features: [
        'Google Analytics and Tag Manager setup',
        'Creation of custom dashboards',
        'User behavior analysis',
        'Data-driven reports and recommendations',
      ],
      isHighlighted: false,
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description:
        'Develop complete web applications tailored to each individual, using modern stacks for a fast and attractive interface.',
      features: [
        'Marketing Strategy & Planning',
        'Paid Advertising Campaigns (Google Ads, Meta Ads)',
        'Email Marketing & Automation',
        'Social Media Management',
        'Conversion Rate Optimization (CRO)',
        'Product Feed Optimization (Google Shopping, Meta Catalog)',
        'Landing Page for Campaigns',
      ],
      isHighlighted: false,
    },
    {
      icon: Zap,
      title: 'Automation & Integration',
      description:
        'Stop doing repetitive and tedious tasks. We implement custom automations that save time and reduce errors, so you can focus on growing your business.',
      features: [
        'Automation strategy & implementation',
        'Custom integrations (APIs, webhooks)',
        'Workflow orchestration and scheduling',
        'Monitoring and alerting',
      ],
      isHighlighted: false,
    },
  ]

  const highlighted = services.filter((s) => s.isHighlighted)
  const regular = services.filter((s) => !s.isHighlighted)

  return (
    <section id="services" className="py-20 md:py-32 bg-zinc-950 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-text/70 text-lg max-w-2xl mx-auto">
            My services focus on maximizing your digital presence and growing your business through effective and personalized strategies.
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {highlighted.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {regular.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-text/60 mb-6">Interested in a custom service or have a specific project in mind?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-transparent border-2 border-primary hover:bg-primary text-primary hover:text-white font-semibold rounded-lg transition-all duration-300"
          >
            Inquire About Custom Services
          </a>
        </div>
      </div>
    </section>
  )
}
