import './globals.css'
import { Providers } from "./providers"
import { Navbar, Footer } from '@/components/elements'
import { urbanistFont } from '@/font/font'

export const metadata = {
  generator: 'Next.js',
  applicationName: 'Automateease-Website',
  referrer: 'origin-when-cross-origin',
  title: 'Automate your marketing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${urbanistFont.className}`} suppressHydrationWarning>
      <body className={"min-h-screen overflow-hidden overflow-y-auto bg-white selection:bg-primary/10 selection:text-primary dark:bg-gray-950"}>
        <Providers>
          {/* <Navbar /> */}
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}