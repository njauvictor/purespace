import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { siteData } from "@/lib/data"

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-card to-background pt-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">About PureSpace</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Excellence in every detail, since 2014. Transforming Nairobi, one clean space at a time. Over a decade
                of dedicated service to homes and businesses across the city.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story & Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            {siteData.about.sections.map((section, idx) => (
              <div key={idx} className="mb-16 smooth-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <h2 className="text-3xl font-bold mb-6 text-primary text-balance">{section.heading}</h2>
                {section.content ? (
                  <p className="text-lg text-muted-foreground leading-relaxed">{section.content}</p>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {section.points?.map((point, pidx) => (
                      <div key={pidx} className="flex gap-4">
                        <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Stats */}
            <div className="mt-20 grid md:grid-cols-4 gap-8 pt-20 border-t border-border">
              {siteData.about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center p-6 bg-card rounded-xl border border-border hover-lift transform transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-primary mb-2">{stat.num}</div>
                  <p className="text-muted-foreground text-lg font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-balance">Meet Our Team</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our team consists of thoroughly vetted, trained professionals who are genuinely passionate about
                  delivering exceptional cleaning services. Each team member is background-checked, professionally
                  insured, and committed to your complete satisfaction every single day.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Certified cleaning specialists with advanced training",
                    "Comprehensive background-checked professionals",
                    "Continuous training & skill development programs",
                    "Eco-conscious and sustainability-focused approach",
                    "Dedicated to customer satisfaction and quality",
                    "Professional insurance for your peace of mind",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-primary text-xl">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold inline-block hover-lift"
                >
                  Get to Know Us Better
                </Link>
              </div>

              <div className="relative h-96 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl hover-lift">
                <img
                  src="/professional-cleaning-team-diverse-happy.jpg?height=500&width=500&query=professional cleaning team diverse staff"
                  alt="Our professional team"
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl font-bold mb-12 text-center text-balance">Our Commitment to You</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🌍",
                  title: "Environmental Responsibility",
                  content:
                    "We're committed to protecting our environment through sustainable practices, eco-friendly products, and minimal waste generation in all our operations.",
                },
                {
                  icon: "🤝",
                  title: "Community Partnership",
                  content:
                    "We're proud members of the Nairobi community. We support local causes, employ local talent, and invest in our community's growth and development.",
                },
                {
                  icon: "⭐",
                  title: "Excellence Always",
                  content:
                    "We never compromise on quality. Every project, no matter the size, receives the same dedication, expertise, and attention to detail that has earned us 500+ happy clients.",
                },
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-card border border-border rounded-xl hover-lift text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 gradient-accent">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-6 text-balance">
              Join Our Growing Family
            </h2>
            <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Become part of the PureSpace family and experience service that goes beyond cleaning. We care about your
              space and your satisfaction.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent-foreground text-primary rounded-lg hover:shadow-lg transition-all duration-300 font-semibold hover-lift"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
