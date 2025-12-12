import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { siteData } from "@/lib/data"

export default function Services() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-card to-background pt-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Our Services</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Complete cleaning solutions for every space and need. From residential to commercial, specialized
                services to maintenance plans - we handle it all with expertise, professionalism, and attention to
                detail that sets us apart.
              </p>
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8">
              {siteData.services.map((service, idx) => (
                <div
                  key={service.id}
                  className="p-8 bg-card border border-border rounded-xl hover-lift group transform transition-all duration-300 hover:border-primary/50"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{service.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{service.description}</p>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{service.longDescription}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-center gap-2 text-muted-foreground text-sm">
                          <span className="w-2 h-2 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                    <Link
                      href="/contact"
                      className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium hover-lift"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl font-bold mb-16 text-center text-balance">Our Proven Process</h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  num: "01",
                  title: "Consultation",
                  desc: "We assess your space thoroughly, understand your specific needs, and answer any questions you have about our services.",
                },
                {
                  num: "02",
                  title: "Planning",
                  desc: "Create a customized cleaning plan tailored specifically to your unique requirements and budget.",
                },
                {
                  num: "03",
                  title: "Execution",
                  desc: "Our professional team delivers impeccable service with meticulous attention to every detail.",
                },
                {
                  num: "04",
                  title: "Follow-up",
                  desc: "We ensure your complete satisfaction and provide ongoing support for future cleaning needs.",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="text-center p-6 bg-card rounded-xl border border-border hover-lift transform transition-all duration-300 hover:border-primary/50"
                >
                  <div className="text-5xl font-bold text-primary/30 mb-4">{step.num}</div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why These Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl font-bold mb-12 text-center text-balance">Why Our Services Stand Out</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Eco-Friendly Approach",
                  content:
                    "All our services use 100% biodegradable, non-toxic cleaning products that are safe for your family, pets, and the environment. We're committed to sustainability without compromising on cleaning effectiveness or results.",
                },
                {
                  title: "Expert Team",
                  content:
                    "Our cleaning specialists are thoroughly trained, background-checked, and insured. Each team member brings years of experience and genuine passion for delivering exceptional cleaning results.",
                },
                {
                  title: "Customizable Solutions",
                  content:
                    "Every space is unique, so we customize our services to match your specific needs, preferences, and budget. No cookie-cutter approach - just tailored solutions.",
                },
                {
                  title: "100% Satisfaction Guarantee",
                  content:
                    "We're confident in our work. If you're not completely satisfied with any service, we'll re-clean for free. Your happiness is our guarantee.",
                },
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-card border border-border rounded-xl hover-lift">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-accent">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-6 text-balance">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Book your cleaning service today and experience the difference professional service makes. Get a free,
              no-obligation quote within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex px-8 py-4 bg-accent-foreground text-primary rounded-lg hover:shadow-lg transition-all duration-300 font-semibold hover-lift"
              >
                Schedule Your Service
              </Link>
              <Link
                href="/"
                className="inline-flex px-8 py-4 border-2 border-accent-foreground text-accent-foreground rounded-lg hover:bg-accent-foreground/10 transition-all duration-300 font-semibold hover-lift"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
