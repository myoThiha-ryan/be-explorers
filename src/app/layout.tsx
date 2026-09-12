import type { Metadata } from "next";
import { DM_Sans, Noto_Sans_Myanmar, Poppins } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/site";
import { isIndexable } from "@/lib/seo";
import "./globals.css";

// Body text. Variable font, so every weight the UI uses comes from one file;
// `opsz` lets the browser optically size between small labels and 20px prose.
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  axes: ["opsz"],
});

// Headings and sub-headings. Poppins has no variable cut, so each weight is a
// separate file — keep this list to the weights actually used (400 body-ish
// display copy, 500 headings, 600 the wordmark). Italic is for the wordmark.
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
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
      className={`${dmSans.variable} ${poppins.variable} ${notoMyanmar.variable} h-full antialiased`}
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
