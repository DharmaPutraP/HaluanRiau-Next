import "./globals.css";
import Providers from "./providers.jsx";
import Navbar from "@/components/Layout/Navbar.jsx";
import Footer from "@/components/Layout/Footer.jsx";
import { Inter, Merriweather } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata = {
  title: "Your News Site",
  description: "Berita terpercaya dan terkini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${merriweather.variable}`}>
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="grow md:mx-20">{children}</main>

            <div className="md:mx-24">
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
