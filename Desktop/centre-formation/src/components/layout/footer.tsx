import Link from "next/link"

const footerLinks = {
  programs: [
    { label: "Full-Stack Development", href: "/programs/full-stack-web-development" },
    { label: "English Language", href: "/programs/english-language-mastery" },
    { label: "Digital Marketing", href: "/programs/digital-marketing-seo" },
    { label: "Graphic Design", href: "/programs/graphic-design-visual-communication" },
    { label: "Business Management", href: "/programs/business-management-leadership" },
    { label: "Accounting", href: "/programs/accounting-financial-management" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Teachers", href: "/teachers" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  support: [
    { label: "FAQ", href: "/contact#faq" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Scholarships", href: "#" },
    { label: "Career Opportunities", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white font-bold text-base">
                CF
              </div>
              <span className="font-heading font-bold text-xl">
                Centre<span className="text-primary">Formation</span>
              </span>
            </Link>
            <p className="text-muted max-w-md leading-relaxed mb-6">
              Empowering professionals with world-class education since 2012. 
              Join thousands of successful graduates who transformed their careers 
              through our comprehensive training programs.
            </p>
            <div className="flex gap-4">
              {["facebook", "twitter", "linkedin", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-primary/20 text-muted hover:text-primary transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-xs font-medium capitalize">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/60 mb-6">
              Programs
            </h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/60 mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/60 mb-6">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            © 2025 Centre de Formation. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
