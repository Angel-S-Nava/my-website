'use client'

import React, { useState, JSX } from 'react'
import { Mail, Linkedin, Github, Send, Youtube } from 'lucide-react'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = {
  name: boolean
  email: boolean
  subject: boolean
  message: boolean
}

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({
    name: false,
    email: false,
    subject: false,
    message: false,
  })

  const [honeypot, setHoneypot] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((p) => ({ ...p, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((p) => ({ ...p, [name]: false }))
    }
  }

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSuccessMsg(null)
    setErrorMsg(null)

    const newErrors: FormErrors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '' || !validateEmail(formData.email),
      subject: formData.subject.trim() === '',
      message: formData.message.trim() === '',
    }
    setErrors(newErrors)
    if (Object.values(newErrors).some(Boolean)) return

    if (honeypot) {
      setErrorMsg('Bot detected.')
      return
    }

    setIsSending(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, honeypot }),
      });

      const rawText = await res.text();
      let data;
      try {
        data = JSON.parse(rawText);
      } catch {
        data = { rawText };
      }

      if (!res.ok) {
        console.error('API error', res.status, res.statusText, rawText);
        throw new Error(
          data?.error ||
          `Error ${res.status}: ${res.statusText} — ${String(rawText).slice(0, 300)}`
        );
      }
      setSuccessMsg('Message sent. I will contact you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err: unknown) {
      console.error('Contact error:', err)
      setErrorMsg((err as Error).message || 'Unexpected error')
    } finally {
      setIsSending(false)
    }
  }

  const socialLinks = [
    { icon: Mail, href: 'mailto:angelnavafierro@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/angel-nava-38851632a/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Angel-S-Nava', label: 'GitHub' },
    { icon: Youtube, href: 'https://www.youtube.com/@AngelNavaFI', label: 'YouTube' },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Contact Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-text/70 text-lg max-w-2xl mx-auto">
            Do you have a project in mind? I would love to hear more about your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-text font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-zinc-900 border-2 ${
                      errors.name ? 'border-red-500' : 'border-zinc-800'
                    } rounded-lg text-text focus:outline-none focus:border-accent transition-colors`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">This field is required</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-text font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-zinc-900 border-2 ${
                      errors.email ? 'border-red-500' : 'border-zinc-800'
                    } rounded-lg text-text focus:outline-none focus:border-accent transition-colors`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">Enter a valid email</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-text font-medium mb-2">
                  Inquiry Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-zinc-900 border-2 ${
                    errors.subject ? 'border-red-500' : 'border-zinc-800'
                  } rounded-lg text-text focus:outline-none focus:border-accent transition-colors`}
                  placeholder="How can I help you?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">This field is required</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-text font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-zinc-900 border-2 ${
                    errors.message ? 'border-red-500' : 'border-zinc-800'
                  } rounded-lg text-text focus:outline-none focus:border-accent transition-colors resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">This field is required</p>
                )}
              </div>

              {/* Honeypot field — usar clase sr-only */}
              <input
                type="text"
                name="honeypot"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="sr-only"
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
              />

              <button
                type="submit"
                disabled={isSending}
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-light text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-glow disabled:opacity-60"
              >
                {isSending ? 'Sending...' : 'Send Message'}
                <Send size={20} />
              </button>

              {successMsg && <p className="text-green-400 mt-2">{successMsg}</p>}
              {errorMsg && <p className="text-red-500 mt-2">{errorMsg}</p>}
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-text mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-text/60 text-sm mb-1">Email</p>
                  <a
                    href="mailto:angelnavafierro@gmail.com"
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    angelnavafierro@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-text/60 text-sm mb-1">Location</p>
                  <p className="text-text/80">Guadalajara, Jalisco</p>
                </div>
                <div>
                  <p className="text-text/60 text-sm mb-1">Availability</p>
                  <p className="text-accent-secondary">Agile project management</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-text mb-4">Social Media</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-text/80 hover:text-accent transition-colors group"
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>{social.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
