import { Metadata } from 'next'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Globe, Megaphone, Target, Eye, Award } from "lucide-react"

export const metadata: Metadata = {
  title: 'Home - Digital Marketing Agency | navamkt',
  description: 'Transform your business with expert digital marketing strategies. SEO, social media marketing, content creation, and data-driven growth solutions.',
  keywords: [
    'digital marketing agency',
    'SEO services',
    'social media marketing',
    'content marketing',
    'growth marketing',
    'marketing strategy',
    'online presence'
  ],
  openGraph: {
    title: 'Digital Marketing Agency | navamkt',
    description: 'Transform your business with expert digital marketing strategies. SEO, social media, content marketing, and data-driven growth solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency | navamkt',
    description: 'Transform your business with expert digital marketing strategies.',
  },
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  const services = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "SEO Optimization",
      href: "/services#seo",
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Social Media Marketing",
      href: "/services#social",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Content Marketing",
      href: "/services#content",
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Elevate Your Digital Presence
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Transform Your Business with Data-Driven Marketing
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              At navamkt, we combine creativity with analytics to deliver marketing solutions that drive real results. From strategy to execution, we're your partner in digital success.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8">
                Get Your Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Most Requested Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="h-full transition-all hover:shadow-lg hover:scale-105 cursor-pointer border-2 hover:border-primary">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower businesses of all sizes with innovative digital marketing strategies that drive measurable growth and sustainable success in an ever-evolving digital landscape.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Eye className="h-6 w-6" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the leading digital marketing agency that businesses trust to navigate the complexities of online marketing and achieve exceptional results through creativity and data-driven insights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Innovation and creativity in every campaign</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Transparency and open communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Results-driven approach with measurable ROI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Client success as our top priority</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}