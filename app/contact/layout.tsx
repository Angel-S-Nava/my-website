// app/contact/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Digital Marketing Agency | navamkt',
  description: 'Get in touch with navamkt for expert digital marketing solutions. SEO, social media, content marketing, and growth strategies tailored to your business.',
  keywords: [
    'contact digital marketing agency',
    'SEO services consultation',
    'social media marketing help',
    'content marketing experts',
    'marketing strategy consultation',
    'get free audit',
    'digital agency contact'
  ],
  openGraph: {
    title: 'Contact Us - Digital Marketing Agency | navamkt',
    description: 'Get in touch with navamkt for expert digital marketing solutions and free consultations.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Digital Marketing Agency | navamkt',
    description: 'Get expert digital marketing solutions and free consultations from navamkt.',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}