import type { Metadata } from "next";
import { Fraunces, Inter, Noto_Sans_Myanmar } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/site";
import { isIndexable } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const notoMyanmar = Noto_Sans_Myanmar({
  subsets: ["myanmar"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-noto-myanmar",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — London Walking Tours & Day Trips in English, Myanmar & German`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    title: `${site.name} — London Walking Tours & Day Trips`,
    description: site.description,
  },
  alternates: { canonical: "/" },
  // robots.txt alone will not stop a page someone has linked to being indexed;
  // the meta tag will. Both are driven by SITE_INDEXABLE.
  robots: isIndexable ? undefined : { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${fraunces.variable} ${notoMyanmar.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only rounded-full bg-navy-800 px-5 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
