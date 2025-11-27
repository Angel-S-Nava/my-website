import type { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Workflow, Users, LineChart, Rocket, CheckCircle2, Target, Lightbulb, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: 'Our Process - Digital Marketing Methodology | navamkt',
  description: 'Discover navamkt\'s proven 4-step digital marketing process: Discovery, Strategy, Implementation & Optimization. Data-driven approach for measurable results.',
  keywords: [
    'digital marketing process',
    'marketing methodology',
    'SEO strategy process',
    'campaign implementation',
    'data-driven marketing',
    'marketing optimization',
    'agile marketing approach',
    'results-driven process'
  ],
  openGraph: {
    title: 'Our Process - Digital Marketing Methodology | navamkt',
    description: 'Discover navamkt\'s proven 4-step digital marketing process for measurable results and business growth.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Process - Digital Marketing Methodology | navamkt',
    description: 'Proven 4-step digital marketing process for business growth and measurable ROI.',
  },
  alternates: {
    canonical: '/process',
  },
}

export default function ProcessPage() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We begin by understanding your business, goals, target audience, and competitive landscape. This foundation ensures our strategies align perfectly with your objectives.",
      icon: <Target className="h-6 w-6" />
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Based on our findings, we craft a comprehensive marketing strategy tailored to your needs, complete with clear KPIs and measurable objectives.",
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Implementation",
      description: "Our expert team executes the strategy with precision, creating content, launching campaigns, and optimizing for maximum impact.",
      icon: <Rocket className="h-6 w-6" />
    },
    {
      number: "04",
      title: "Monitor & Optimize",
      description: "We continuously track performance, analyze data, and refine our approach to ensure optimal results and ROI.",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ]

  const workingStyle = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Partnership",
      description: "We work closely with you at every stage, ensuring your vision and expertise are integrated into our strategies."
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: "Transparent Communication",
      description: "Regular updates, detailed reports, and open communication channels keep you informed and involved throughout the journey."
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Agile Approach",
      description: "We adapt quickly to market changes and performance data, pivoting strategies to maximize results and opportunities."
    }
  ]

  const methodology = [
    {
      title: "Data-Driven Decisions",
      points: [
        "Comprehensive analytics and tracking",
        "A/B testing for continuous improvement",
        "Performance benchmarking against industry standards",
        "Real-time reporting and insights"
      ]
    },
    {
      title: "Customer-Centric Focus",
      points: [
        "Deep audience research and segmentation",
        "Personalized messaging and targeting",
        "User experience optimization",
        "Customer journey mapping"
      ]
    },
    {
      title: "Multi-Channel Integration",
      points: [
        "Coordinated campaigns across platforms",
        "Consistent brand messaging",
        "Cross-channel attribution tracking",
        "Unified content strategy"
      ]
    }
  ]

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h1>
            <p className="text-xl text-muted-foreground">
              A proven methodology designed to deliver exceptional results
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Workflow className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our 4-Step Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A systematic approach that transforms your marketing goals into measurable success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="border-2 relative overflow-hidden group hover:border-primary transition-colors">
                  <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                    {step.number}
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {step.icon}
                      </div>
                      <div className="text-sm font-semibold text-primary">STEP {step.number}</div>
                    </div>
                    <CardTitle className="text-2xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">How We Work</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Building successful partnerships through collaboration and transparency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {workingStyle.map((item, index) => (
                <Card key={index} className="text-center border-2">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary mb-4">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <LineChart className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Methodology</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every campaign we create
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {methodology.map((item, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                  <Rocket className="h-8 w-8" />
                </div>
                <CardTitle className="text-3xl mb-2">Path to Success</CardTitle>
                <CardDescription className="text-lg">
                  Your journey to digital marketing excellence starts here
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg flex items-center gap-2">
                        <span className="text-primary">→</span>
                        Clear Roadmap
                      </h4>
                      <p className="text-muted-foreground">
                        Every project begins with a detailed plan outlining milestones, deliverables, and timelines.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg flex items-center gap-2">
                        <span className="text-primary">→</span>
                        Regular Check-ins
                      </h4>
                      <p className="text-muted-foreground">
                        Scheduled meetings keep everyone aligned and allow for quick adjustments when needed.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg flex items-center gap-2">
                        <span className="text-primary">→</span>
                        Measurable Results
                      </h4>
                      <p className="text-muted-foreground">
                        Track your progress with comprehensive reports and analytics dashboards.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg flex items-center gap-2">
                        <span className="text-primary">→</span>
                        Continuous Growth
                      </h4>
                      <p className="text-muted-foreground">
                        We don't stop at launch. Ongoing optimization ensures sustained success.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}