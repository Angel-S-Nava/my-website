import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, Target, TrendingUp, Award, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: 'About Us - Digital Marketing Agency | navamkt',
  description: 'Learn about navamkt - your trusted digital marketing partner. Discover our story, culture, values, and mission to drive business growth through innovative marketing strategies.',
  keywords: [
    'digital marketing agency',
    'about navamkt',
    'marketing team',
    'company values',
    'mission vision',
    'marketing expertise',
    'digital agency story'
  ],
  openGraph: {
    title: 'About Us - Digital Marketing Agency | navamkt',
    description: 'Learn about navamkt - your trusted digital marketing partner. Discover our story, culture, values, and mission to drive business growth.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Digital Marketing Agency | navamkt',
    description: 'Discover navamkt\'s story, culture, and mission to transform businesses through innovative digital marketing.',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About navamkt</h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in digital marketing excellence
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">Our Story</h2>
              </div>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to democratize digital marketing, navamkt was born from the belief that every business deserves access to world-class marketing strategies, regardless of size or budget. What started as a small team of passionate marketers has grown into a full-service digital marketing agency.
                </p>
                <p>
                  Our approach is built on curiosity, continuous growth, and the drive to create meaningful digital solutions. Rather than relying on past projects, we focus on understanding what works today—and what will matter tomorrow. Every decision is shaped by data, clarity, and a commitment to producing results that actually move the needle. As we evolve, so does the way we design, optimize, and adapt, always with the goal of supporting those who choose to work with us and helping them build a stronger presence in the digital landscape.
                </p>
                <p>
                  Today, we pride ourselves on being more than just a marketing agency. We're strategic partners who invest in understanding your business, your goals, and your challenges. Every campaign we create, every strategy we develop, is tailored to deliver measurable results that drive real business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Heart className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">Culture & Values</h2>
              </div>
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At navamkt, our culture is built on collaboration, innovation, and integrity. We believe that the best work happens when talented individuals come together with a shared purpose and mutual respect.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <Lightbulb className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-xl">Innovation First</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        We constantly explore new tools, platforms, and strategies to stay ahead of the curve and deliver cutting-edge solutions.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                          <Users className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-xl">Client-Centric</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Your success is our success. We build lasting relationships based on trust, transparency, and tangible results.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <TrendingUp className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-xl">Data-Driven</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Every decision we make is backed by data and analytics, ensuring measurable ROI and continuous improvement.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                          <Award className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-xl">Excellence</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        We hold ourselves to the highest standards, delivering quality work that exceeds expectations every time.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">Mission, Vision & Value Offer</h2>
            </div>

            <div className="space-y-8">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Target className="h-6 w-6 text-primary" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-lg">
                  <p className="text-muted-foreground leading-relaxed">
                    To empower businesses of all sizes with innovative, data-driven digital marketing strategies that drive measurable growth and sustainable success. We are committed to helping our clients navigate the complexities of the digital landscape with confidence and clarity.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-accent" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-lg">
                  <p className="text-muted-foreground leading-relaxed">
                    To be recognized as the leading digital marketing agency that businesses trust to transform their online presence and achieve exceptional results. We envision a future where every business, regardless of size, has the tools and expertise to thrive in the digital economy.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Award className="h-6 w-6 text-primary" />
                    Our Value Offer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong className="text-foreground">Customized Strategies:</strong> Tailored marketing plans designed specifically for your business goals and target audience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong className="text-foreground">Transparent Reporting:</strong> Clear, comprehensive analytics and regular updates on campaign performance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong className="text-foreground">Proven ROI:</strong> Focus on metrics that matter, delivering measurable returns on your marketing investment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong className="text-foreground">Expert Team:</strong> Access to experienced professionals across all digital marketing disciplines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong className="text-foreground">Continuous Optimization:</strong> Ongoing refinement and improvement based on performance data and market trends</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}