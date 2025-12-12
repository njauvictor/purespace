"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { siteData } from "@/lib/data"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-card to-background pt-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Get In Touch</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We'd love to hear from you. Let's transform your space together. We respond within 2 hours to all
                inquiries. Available 24/7 for emergencies.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="smooth-in">
                <h2 className="text-3xl font-bold mb-8 text-balance">Send us a Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-primary/20 border border-primary rounded-lg animate-pulse">
                    <p className="text-primary font-semibold">
                      Thank you! We'll be in touch shortly with your personalized quote.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground transition-all duration-300"
                      placeholder="+254 (0) 700 000 000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Service Interested</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {siteData.services.map((service) => (
                        <option key={service.id} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground resize-none transition-all duration-300"
                      placeholder="Tell us about your cleaning needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold hover-lift transform"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="smooth-in" style={{ animationDelay: "100ms" }}>
                <h2 className="text-3xl font-bold mb-8 text-balance">Contact Information</h2>

                <div className="space-y-8 mb-12">
                  {siteData.contact.methods.map((method, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 p-6 bg-card border border-border rounded-lg hover-lift transform transition-all duration-300 hover:border-primary/50"
                    >
                      <div className="text-4xl">{method.icon}</div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{method.type}</h3>
                        <p className="text-muted-foreground">{method.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-card border border-border rounded-xl mb-8 hover-lift">
                  <h3 className="font-semibold text-foreground mb-4 text-lg">Business Hours</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Weekdays:</strong> {siteData.contact.hours.weekdays}
                    </p>
                    <p>
                      <strong className="text-foreground">Weekends:</strong> {siteData.contact.hours.weekends}
                    </p>
                    <p>
                      <strong className="text-foreground">Emergency:</strong> {siteData.contact.hours.emergency}
                    </p>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary rounded-xl hover-lift">
                  <p className="text-foreground font-semibold mb-2 text-lg">📍 Location</p>
                  <p className="text-muted-foreground leading-relaxed">{siteData.company.address}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-2xl font-bold mb-8 text-center">Find Us</h2>
            <div className="w-full h-96 bg-card border border-border rounded-xl overflow-hidden shadow-lg hover-lift">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8199819265!2d36.7372!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2skenya!4v1234567890"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
