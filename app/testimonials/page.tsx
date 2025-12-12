import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { siteData } from "@/lib/data"

export default function Testimonials() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-card to-background pt-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">What Our Clients Say</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Trusted by hundreds of satisfied customers across Nairobi. Real stories from real people who've
                experienced the PureSpace difference. Your satisfaction is our success.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8">
              {siteData.testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-card border border-border rounded-xl hover-lift transition-all duration-300 transform hover:border-primary/50"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span
                        key={i}
                        className="text-2xl text-primary animate-bounce"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Message */}
                  <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.message}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary transform transition-transform duration-300 hover:scale-110"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-20 pt-20 border-t border-border">
              <div className="grid md:grid-cols-3 gap-8">
                {["✓ 100% Satisfaction Guaranteed", "✓ Professional & Vetted Team", "✓ Eco-Friendly Products"].map(
                  (badge, idx) => (
                    <div key={idx} className="p-6 bg-card rounded-xl border border-border hover-lift text-center">
                      <p className="text-lg text-foreground font-medium">{badge}</p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl font-bold mb-12 text-center text-balance">Why Clients Trust Us</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: "500+", label: "Happy Clients" },
                { num: "100%", label: "Satisfaction Rate" },
                { num: "10+", label: "Years of Excellence" },
                { num: "1K+", label: "Projects Completed" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center p-8 bg-card rounded-xl border border-border hover-lift transform transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-primary mb-2">{stat.num}</div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-accent">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-4 text-balance">
              Join Hundreds of Satisfied Clients
            </h2>
            <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the PureSpace difference today. Get your free quote and join our family of happy customers who
              trust us with their most important spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex px-8 py-4 bg-accent-foreground text-primary rounded-lg hover:shadow-lg transition-all duration-300 font-semibold hover-lift"
              >
                Get Started Now
              </Link>
              <Link
                href="/services"
                className="inline-flex px-8 py-4 border-2 border-accent-foreground text-accent-foreground rounded-lg hover:bg-accent-foreground/10 transition-all duration-300 font-semibold hover-lift"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
