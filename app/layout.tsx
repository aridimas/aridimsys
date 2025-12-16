import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

// Current timestamp to force cache refresh
const timestamp = new Date().getTime()

export const metadata: Metadata = {
  title: "Ari Dimas Yudhi Setiawan | Cyber Security | Security Operations Center",
  description: "Portfolio of Ari Dimas Yudhi Setiawan, a Cybersecurity and Security Operations Center.",
  metadataBase: new URL("https://aridimsys-portfolio.vercel.app/"),
  openGraph: {
    title: "Ari Dimas Yudhi Setiawan | Cyber Security | Security Operations Center",
    description: "Portfolio of Ari Dimas Yudhi Setiawan, a Cybersecurity and Security Operations Center.",
    url: "https://aridimsys-portfolio.vercel.app/",
    siteName: "Ari Dimas Yudhi Setiawan | damilareoo.xyz",
    images: [
      {
        url: `/images/og-image.png?v=${timestamp}`,
        width: 1200,
        height: 630,
        alt: "Ari Dimas Yudhi Setiawan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ari Dimas Yudhi Setiawan | Cyber Security | Security Operations Center",
    description: "Portfolio of Ari Dimas Yudhi Setiawan, a Cybersecurity and Security Operations Center.",
    images: [`/images/og-image.png?v=${timestamp}`],
    creator: "@aridimas.y",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Force refresh of social media cache with timestamp */}
        <meta property="og:image" content={`https://damilareoo.xyz/images/og-image.png?v=${timestamp}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Damilare Osofisan" />
        <meta property="og:image:type" content="image/png" />

        <meta name="twitter:image" content={`https://damilareoo.xyz/images/og-image.png?v=${timestamp}`} />
        <meta name="twitter:image:alt" content="Damilare Osofisan" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* LinkedIn specific */}
        <meta property="og:image:secure_url" content={`https://damilareoo.xyz/images/og-image.png?v=${timestamp}`} />

        {/* Additional social media tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aridimsys.vercel.app/" />
        <meta property="og:title" content="Ari Dimas Yudhi Setiawan | Cyber Security | Security Operations Center" />
        <meta
          property="og:description"
          content="Portfolio of Ari Dimas Yudhi Setiawan, a Cybersecurity and Security Operations Center."
        />
        <meta property="og:site_name" content="Ari Dimas Yudhi Setiawan | damilareoo.xyz" />

        {/* Cache control for better refreshing */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
