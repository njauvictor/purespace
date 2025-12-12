import Link from "next/link"
import { siteData } from "@/lib/data"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{siteData.company.logo}</span>
              <div>
                <div className="font-bold text-primary">{siteData.company.name}</div>
                <div className="text-xs text-muted-foreground">{siteData.company.tagline}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{siteData.company.description}</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              {siteData.navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">{siteData.company.phone}</p>
              <p className="text-sm text-muted-foreground">{siteData.company.email}</p>
              <p className="text-sm text-muted-foreground">{siteData.company.address}</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Hours</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
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
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">{siteData.footer.copyright}</p>
            <div className="flex gap-6">
              {siteData.footer.links.map((link) => (
                <a key={link} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
