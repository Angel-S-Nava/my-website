import type { Metadata } from 'next'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Megaphone, ArrowRight, Mail, Bot } from "lucide-react"

export const metadata: Metadata = {
  title: 'Digital Marketing Services - SEO, Social Media & AI Solutions | navamkt',
  description: 'Comprehensive digital marketing services including SEO optimization, social media marketing, conversational AI, and content marketing. Drive growth with our expert strategies.',
  keywords: [
    'digital marketing services',
    'SEO optimization',
    'social media marketing',
    'conversational AI',
    'content marketing',
    'search engine optimization',
    'social media management',
    'chatbot development',
    'marketing automation',
    'lead generation',
    'online marketing services'
  ],
  openGraph: {
    title: 'Digital Marketing Services - SEO, Social Media & AI Solutions | navamkt',
    description: 'Expert digital marketing services including SEO, social media marketing, and AI automation. Drive measurable results for your business.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services - SEO, Social Media & AI Solutions | navamkt',
    description: 'Comprehensive digital marketing services to drive business growth and online visibility.',
  },
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  const services = [
    {
      id: "seo",
      iconName: "BarChart3",
      title: "SEO Optimization",
      description: "Boost your online visibility and drive organic traffic with our comprehensive SEO strategies. We optimize your website's technical structure, content, and backlink profile to improve search engine rankings.",
      features: [
        "Keyword research and analysis",
        "On-page and technical SEO",
        "Link building and outreach",
        "Local SEO optimization",
        "Monthly performance reports",
        "SEO audit and gap analysis",
        "Content strategy and creation",
        "Schema markup / structured data",
        "Core Web Vitals optimization",
        "Mobile-first / responsive optimization",
        "Internal linking strategy",
        "Competitor analysis",
        "Conversion rate optimization (CRO)",
        "SEO maintenance and continuous optimization"
      ],
      deliverables: [
        "Detailed SEO audit report (technical, on-page, backlinks)",
        "Keyword map for target pages",
        "Editorial calendar (blogs / artículos optimizados)",
        "Monthly content pieces (blog posts, landing pages)",
        "Backlink outreach plan and acquisition",
        "Local listings setup / optimización (Google My Business, directorios)",
        "Schema / rich snippets implementation",
        "Page speed report and optimization plan",
        "Mobile usability improvements",
        "Internal link architecture plan",
        "Competitor benchmark report",
        "Monthly KPI dashboard (traffic, rankings, conversions)",
        "Quarterly strategy review and roadmap"
      ],
      process: [
        "Initial SEO Audit",
        "Strategy Development",
        "Implementation Phase",
        "Content Creation",
        "Link Building Campaign",
        "Technical Optimization",
        "Monitoring & Reporting",
        "Iterative Improvements"
      ],
      kpis: [
        "Organic traffic growth",
        "Keyword ranking improvements",
        "Domain Authority / Domain Rating",
        "Number of quality backlinks",
        "Bounce rate",
        "Conversion rate from organic traffic",
        "Core Web Vitals scores",
        "Local search visibility"
      ]
    },
    {
      id: "social",
      iconName: "Megaphone",
      title: "Social Media Marketing & Management",
      description: "Cultivate a powerful brand presence and drive meaningful engagement through strategic social media management. We craft compelling narratives, leverage data-driven advertising, and foster authentic communities to connect with your audience and achieve your business objectives.",
      features: [
        "Comprehensive social media audit and competitive analysis",
        "Platform-specific content strategy (TikTok, Instagram, LinkedIn, etc.)",
        "High-quality content creation (graphics, video, copywriting)",
        "Short-form video strategy (Reels, Shorts, TikTok)",
        "Paid social media advertising campaigns & retargeting",
        "Community management & active engagement (responses, DMs)",
        "User-Generated Content (UGC) campaigns and amplification",
        "Social listening and brand sentiment analysis",
        "Crisis management protocol and guidelines",
        "Conversion funnel integration (awareness to purchase)",
        "Analytics, reporting, and continuous optimization"
      ],
      deliverables: [
        "Detailed Social Media Audit & Competitor Benchmark Report",
        "Comprehensive Social Media Strategy & Quarterly Playbook",
        "Monthly Content Calendars (Posts, Stories, Reels, Carousels)",
        "Library of Produced Creative Assets (Graphics, Videos, Copy)",
        "Paid Social Strategy Document (Audiences, Budgets, KPIs)",
        "Ad Creatives & A/B Testing Sets for Campaigns",
        "Influencer/Creator Briefs, Shortlist, and Outreach Campaign",
        "Community Management Guidelines & Response Templates",
        "Social Media Style Guide (Voice, Tone, Visual Identity)",
        "UGC Campaign Strategy & Hashtag Implementation Plan",
        "Social Listening Dashboard Setup (Brand Mentions, Trends)",
        "Monthly Performance Reports with Insights & Recommendations"
      ],
      process: [
        "Discovery & Strategy (Audit, Goals, Audience, KPIs)",
        "Content Planning (Themes, Calendar, Platform Mix)",
        "Creative Production & Asset Development",
        "Campaign Setup (Scheduling, Paid Ads, Influencer Activation)",
        "Community Engagement & Active Management",
        "Performance Monitoring & Social Listening",
        "Data Analysis & Monthly Optimization",
        "Quarterly Strategy Review & Pivot"
      ],
      kpis: [
        "Engagement Rate (Likes, Comments, Shares, Saves)",
        "Reach & Impression Growth",
        "Follower Growth Rate & Quality",
        "Click-Through Rate (CTR) & Website Traffic from Social",
        "Return on Ad Spend (ROAS) & Cost Per Result (CPA)",
        "Video Completion Rate & Story Completion Rate",
        "Lead Generation & Conversion Rate from Social",
        "Share of Voice & Sentiment Analysis",
        "Audience Growth & Community Health"
      ]
    },
    {
      id: "conversational",
      iconName: "Bot",
      title: "Conversational AI & Automations",
      description: "Design and deploy AI-driven chatbots, voice assistants and automated workflows that capture leads, resolve customer queries, and automate repetitive business tasks — integrated with your CRM and analytics stack.",
      features: [
        "Conversational chatbot design (NLU + flows)",
        "Generative responses + controlled fallback logic",
        "CRM and API integrations (HubSpot, Salesforce, Shopify, etc.)",
        "Multi-channel deployment (web chat, WhatsApp, Telegram, voice)",
        "Lead capture & qualification flows",
        "Automated follow-ups (email/SMS) and drip sequences",
        "Intent analytics and conversation reporting",
        "Escalation to human agents with context handoff",
        "Privacy & compliance (data minimization, logging controls)",
        "Maintenance & iterative model tuning"
      ],
      deliverables: [
        "Conversational strategy & persona document",
        "Intents / entities map and training data seed",
        "Prototype flows and UX for web/chat channels",
        "Connected integrations (CRM, ticketing, analytics)",
        "Deployed chatbot on requested channels",
        "SLA + playbook for human handoff and edge cases",
        "Monthly performance dashboard and tuning plan"
      ],
      process: [
        "Discovery & KPI definition (what counts as success)",
        "Conversation design & training dataset prep",
        "MVP prototyping (happy-path + critical fallbacks)",
        "Integration with backend systems and tracking",
        "Pilot rollout and A/B testing (conversion / deflection)",
        "Iterative improvements and periodic retraining",
        "Hand-off + documentation for client teams"
      ],
      kpis: [
        "Deflection rate (conversations handled without human)",
        "Leads captured via chat (volume & quality)",
        "Conversion rate from chat-driven leads",
        "Average response time and resolution time",
        "CSAT / customer satisfaction scores",
        "Cost per resolved ticket (post-automation)"
      ]
    }
  ]

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital marketing solutions designed to help your business grow
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {services.map((service) => (
              <Card key={service.id} id={service.id} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {service.iconName === 'BarChart3' && <BarChart3 className="h-12 w-12" />}
                      {service.iconName === 'Megaphone' && <Megaphone className="h-12 w-12" />}
                      {service.iconName === 'Bot' && <Bot className="h-12 w-12" />}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-3xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">What's Included:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Native details element — server component friendly */}
                    <details className="mt-4 rounded-lg overflow-hidden border">
                      <summary className="list-none">
                        <div className="flex items-center justify-between w-full p-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg shadow-md cursor-pointer select-none">
                          <div className="flex items-baseline gap-3">
                            <span className="font-semibold text-lg">See more details</span>
                            <span className="text-sm opacity-90">Includes: audit, plan & reports</span>
                          </div>
                          <ArrowRight className="ml-2 h-5 w-5 arrow" />
                        </div>
                      </summary>

                      <div className="p-4 bg-muted/10">
                        {/* Deliverables */}
                        {service.deliverables && (
                          <div className="mt-3">
                            <h5 className="font-semibold">Deliverables</h5>
                            <ul className="list-disc list-inside mt-2 text-muted-foreground">
                              {service.deliverables.map((d: string, i: number) => (
                                <li key={i}>{d}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Process */}
                        {service.process && (
                          <div className="mt-3">
                            <h5 className="font-semibold">Process</h5>
                            <ol className="list-decimal list-inside mt-2 text-muted-foreground">
                              {service.process.map((p: string, i: number) => (
                                <li key={i}>{p}</li>
                              ))}
                            </ol>
                          </div>
                        )}

                        {/* KPIs */}
                        {service.kpis && (
                          <div className="mt-3">
                            <h5 className="font-semibold">KPIs</h5>
                            <ul className="list-disc list-inside mt-2 text-muted-foreground">
                              {service.kpis.map((k: string, i: number) => (
                                <li key={i}>{k}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </details>

                  </div>
                </CardContent>

                <CardFooter>
                  <Link href="/contact">
                    <Button size="lg">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto text-center border-2 border-primary/20">
            <CardHeader>
              <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <CardTitle className="text-3xl mb-2">Need Something Else?</CardTitle>
              <CardDescription className="text-lg">
                We offer custom digital marketing solutions tailored to your unique business needs. Let's discuss how we can help you achieve your goals.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/contact">
                <Button size="lg" variant="default">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}