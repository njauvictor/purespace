"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { siteData } from "@/lib/data"

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [filter, setFilter] = useState("all")

  const filteredProjects = siteData.projects

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-card to-background pt-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Our Portfolio</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Explore the incredible transformations we've created for our valued clients. Each project showcases our
                commitment to excellence and attention to detail.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className="group cursor-pointer smooth-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                  onClick={() => setSelectedProject(idx)}
                >
                  <div className="relative h-72 rounded-xl overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300">
                    <img
                      src={project.image + "?height=400&width=400&query=" + project.title || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-white/80 text-sm">{project.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject !== null && (
          <section className="py-20 bg-card/30">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="relative h-96 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                    <img
                      src={
                        siteData.projects[selectedProject].image +
                          "?height=500&width=500&query=" +
                          siteData.projects[selectedProject].title || "/placeholder.svg"
                      }
                      alt={siteData.projects[selectedProject].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-4xl font-bold mb-4 text-foreground">
                    {siteData.projects[selectedProject].title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {siteData.projects[selectedProject].description}
                  </p>

                  <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Before & After:</strong>{" "}
                      {siteData.projects[selectedProject].beforeAfter}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-3">Services Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {siteData.projects[selectedProject].services.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold hover-lift text-center"
                    >
                      Get Similar Service
                    </Link>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="inline-flex px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-semibold hover-lift text-center"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 gradient-accent">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-6 text-balance">
              Ready for Your Transformation?
            </h2>
            <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              See what we can do for your space. Contact us today for a free consultation and quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent-foreground text-primary rounded-lg hover:shadow-lg transition-all duration-300 font-semibold hover-lift"
            >
              Request Your Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
