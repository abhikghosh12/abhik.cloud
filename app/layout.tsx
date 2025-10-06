import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abhik Ghosh - Cloud Architect & AI/ML Expert',
  description: 'Cloud Architect specializing in AWS, Azure, GCP, DevSecOps, and AI/ML solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}