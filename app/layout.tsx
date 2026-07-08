import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { site } from "@/lib/data/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nu-restaurant.com"),
  title: `${site.name} | Authentic Ethiopian Fine Dining in Gondar`,
  description: site.subtagline,
  openGraph: {
    title: `${site.name} | Authentic Ethiopian Fine Dining in Gondar`,
    description: site.subtagline,
    url: "https://nu-restaurant.com",
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Authentic Ethiopian Fine Dining in Gondar`,
    description: site.subtagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-base text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
