import "~/styles/globals.css";
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Portfolio Website",
  description: "Luyanda Madonsela's Portfolio Website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>   
      <Navigation />
          {children}
      <Footer />
      </body>
    </html>
  );
}
