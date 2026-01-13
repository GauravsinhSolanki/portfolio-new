import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gaurav | Full Stack Developer',
  description: 'A clean, timeless portfolio showcasing software engineering work.',
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-primary text-text antialiased`}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">
            {children}
          </main>
          
          <footer className="py-6 border-t border-border">
            <div className="container mx-auto px-4 text-center text-text-muted text-sm">
              © {new Date().getFullYear()} Gauravsinh Solanki. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}