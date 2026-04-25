import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Brocleanx | Premium Shoe Care Yogyakarta",
  description: "Layanan cuci sepatu premium (Premium Shoe Care) profesional di Yogyakarta. Kami menawarkan pembersihan detail-oriented dengan fasilitas hassle-free pickup via WhatsApp admin.",
  keywords: [
    "cuci sepatu Yogyakarta",
    "premium shoe care",
    "laundry sepatu",
    "Brocleanx",
    "cuci sepatu premium",
    "laundry sepatu jogja",
    "shoe cleaning jogja",
  ],
  openGraph: {
    title: "Brocleanx | Premium Shoe Care Yogyakarta",
    description: "Layanan cuci sepatu premium profesional di Yogyakarta dengan fasilitas hassle-free pickup.",
    url: "https://brocleanx.vercel.app",
    siteName: "Brocleanx",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brocleanx Premium Shoe Care",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body>
        <Navbar />

        <main className="min-h-screen w-full overflow-x-hidden flex flex-col">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
