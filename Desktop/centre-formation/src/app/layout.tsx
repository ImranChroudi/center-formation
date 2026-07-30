import type { Metadata } from "next"
import { inter, poppins } from "@/lib/fonts"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GSAPProvider } from "@/components/sections/gsap-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Centre de Formation - Build Your Future With Professional Education",
    template: "%s | Centre de Formation",
  },
  description:
    "Join thousands of students preparing for successful careers. Professional courses, language training, IT programs, business certifications, and career development.",
  keywords: [
    "training center",
    "professional courses",
    "IT programs",
    "language training",
    "business certification",
    "career development",
    "education",
  ],
  openGraph: {
    title: "Centre de Formation - Build Your Future",
    description:
      "Join thousands of students preparing for successful careers through industry-recognized programs.",
    url: "https://centreformation.com",
    siteName: "Centre de Formation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centre de Formation",
    description:
      "Join thousands of students preparing for successful careers through industry-recognized programs.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Centre de Formation",
              description:
                "Leading training center offering professional courses, language training, IT programs, and business certifications.",
              url: "https://centreformation.com",
              logo: "https://centreformation.com/logo.png",
              foundingDate: "2012",
              address: {
                "@type": "PostalAddress",
                addressLocality: "City",
                addressCountry: "Country",
              },
              sameAs: [
                "https://facebook.com/centreformation",
                "https://twitter.com/centreformation",
                "https://linkedin.com/company/centreformation",
                "https://instagram.com/centreformation",
              ],
              offers: {
                "@type": "AggregateOffer",
                offerCount: "15",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body">
        <GSAPProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </GSAPProvider>
      </body>
    </html>
  )
}
