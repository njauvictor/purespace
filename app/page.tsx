"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { siteData } from "@/lib/data"
import { useState, useEffect } from "react"

export default function Home() {
  const [activeProject, setActiveProject] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden bg-gradient-to-b from-card to-background">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          </div>

          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="smooth-in">
                <h1 className="text-5xl font-bold mb-6 leading-tight text-balance">
                  <span className="gradient-text">Premium Cleaning</span> for Your Space
                </h1>
                <p className="text-base text-muted-foreground mb-8 text-balance max-w-xl leading-relaxed">
                  Transform your environment with our professional cleaning services. Quality, reliability, and
                  excellence in every detail. Eco-friendly solutions trusted by 500+ clients across Nairobi. We don't
                  just clean - we create pristine spaces where life thrives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/services"
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold hover-lift inline-block text-center"
                  >
                    Explore Services
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-semibold hover-lift inline-block text-center"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>

              <div className="smooth-in">
                <div className="relative h-96 md:h-96 min-h-96 rounded-2xl overflow-hidden border border-border shadow-2xl hover-lift">
                  <img
                    src="/modern-clean-bright-interior-with-sunlight.jpg?height=600&width=500&query=modern clean bright interior living room"
                    alt="Professional cleaning service"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Why Choose PureSpace?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We stand out because we genuinely care about quality, sustainability, and your complete satisfaction.
                With over a decade of experience, we've earned the trust of hundreds of families and businesses across
                Nairobi.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {siteData.whyChooseUs.map((item, idx) => (
                <div
                  key={item.id}
                  className="p-8 bg-card border border-border rounded-xl hover-lift group text-center transform transition-all duration-300 hover:border-primary/50"
                  style={{
                    transform: scrollY > 500 ? `translateY(${-Math.min(scrollY - 500, 50)}px)` : "translateY(0)",
                  }}
                >
                  <div className="text-5xl mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-card/20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Comprehensive cleaning solutions tailored to your specific needs and budget. From residential to
                commercial, we have the expertise to handle any project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {siteData.services.map((service) => (
                <div
                  key={service.id}
                  className="p-6 bg-card border border-border rounded-xl hover-lift cursor-pointer group transition-all duration-300 hover:border-primary/50"
                >
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{service.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.longDescription}</p>
                  <div className="text-primary font-semibold">{service.price}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold hover-lift"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Portfolio / Projects Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Recent Projects</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                See the transformations we've created for satisfied clients. From apartments to commercial spaces, each
                project showcases our commitment to excellence and attention to detail.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative h-96 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                  <img
                    src={
                      siteData.projects[activeProject].image +
                        "?height=500&width=500&query=" +
                        siteData.projects[activeProject].title || "/placeholder.svg"
                    }
                    alt={siteData.projects[activeProject].title}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{siteData.projects[activeProject].title}</h3>
                    <p className="text-white/90">{siteData.projects[activeProject].location}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">{siteData.projects[activeProject].title}</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {siteData.projects[activeProject].description}
                </p>

                <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Before & After:</strong>{" "}
                    {siteData.projects[activeProject].beforeAfter}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-3">Services Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {siteData.projects[activeProject].services.map((service, idx) => (
                      <span key={idx} className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-2">
                  {siteData.projects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveProject(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeProject ? "bg-primary w-8" : "bg-border hover:bg-primary/50"
                      }`}
                      aria-label={`Project ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparent Pricing */}
        <section className="py-20 md:my-40 bg-card/20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Transparent Pricing</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Simple, honest pricing with no hidden costs. Choose the plan that works for you. All prices include
                eco-friendly products and professional expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {siteData.pricingPlans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`relative p-8 rounded-xl border-2 transition-all duration-300 hover-lift transform hover:-translate-y-2 ${
                    plan.highlighted
                      ? "bg-primary border-primary text-primary-foreground shadow-2xl scale-105 md:scale-110"
                      : "bg-card border-border text-foreground"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground rounded-full text-sm font-bold animate-pulse">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`mb-4 ${plan.highlighted ? "opacity-90" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-5xl font-bold">KES {plan.price}</span>
                    <span className={plan.highlighted ? "opacity-80" : "text-muted-foreground"}> {plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2">
                        <span className="text-lg">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover-lift ${
                      plan.highlighted
                        ? "bg-primary-foreground text-primary hover:shadow-lg"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 md:my-40 bg-gradient-to-r from-primary via-accent to-primary opacity-95">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { num: "10+", label: "Years Experience" },
                { num: "500+", label: "Happy Clients" },
                { num: "100%", label: "Satisfaction Rate" },
                { num: "1K+", label: "Spaces Cleaned" },
              ].map((stat, idx) => (
                <div key={idx} className="transform hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl font-bold text-primary-foreground mb-2">{stat.num}</div>
                  <p className="text-primary-foreground/80 text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 mb-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Transform Your Space?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Get in touch with our team today and experience the PureSpace difference. We'll respond within 2 hours and
              provide a personalized quote for your specific needs. Your satisfaction is our guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold hover-lift"
              >
                Get Your Free Quote
              </Link>
              <Link
                href="/services"
                className="inline-flex px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-semibold hover-lift"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
