import '~/styles/globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Luyanda Madonsela',
  description: "Luyanda Madonsela's Portfolio Website",
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-poppins whitespace-nowrap overflow-x-hidden overflow-y-auto scrollbar-hide bg-sky-50">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
