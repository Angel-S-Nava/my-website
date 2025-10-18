// src/app/page.tsx
import { JSX } from "react";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Angel Nava — Digital Marketing, E-commerce & Web Development",
  description:
    "Freelance digital marketer and web developer helping brands grow through data-driven marketing, conversion optimization and scalable e-commerce solutions.",
  openGraph: {
    title: "Angel Nava — Digital Marketing & Web Development",
    description:
      "Data-driven digital marketing, e-commerce and web development to scale your online revenue. Freelance — Angel Nava.",
    url: "https://navamkt.com",
    images: [
      {
        url: "https://navamkt.com/og-image-home.webp",
        width: 620,
        height: 1200,
        alt: "Angel Nava - Digital Marketing & Web Development",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://navamkt.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Angel Santiago Nava Fierro",
  url: "https://navamkt.com",
  jobTitle: "Freelance Digital Marketer & Web Developer",
  sameAs: [
    "https://www.linkedin.com/in/angel-nava-38851632a/",
    "https://github.com/Angel-S-Nava",
    "https://www.youtube.com/@AngelNavaFI"
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "business",
      email: "angelnavafierro@gmail.com"
    }
  ]
};

export default function Page(): JSX.Element {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />

      {/* Home-specific JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
