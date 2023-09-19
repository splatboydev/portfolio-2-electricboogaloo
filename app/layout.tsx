import { Metadata } from 'next'
import Script from "next/script"
import '/styles/tailwind.css'
 
export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio 2',
}

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
          <Script async defer src="/darkmode.js"/>
          <Script async defer src="/tilt.js" strategy="afterInteractive"/>
        </head>
        <body>{children}</body>
      </html>
    )
  }