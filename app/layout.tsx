import type { Metadata, Viewport } from "next";
import { Poppins, Roboto_Mono, Noto_Sans } from "next/font/google";
import Providers from "@/components/Providers";
import VideoBlackKeyFilter from "@/components/VideoBlackKeyFilter";
import HawkBytesChat from "@/components/HawkBytesChat";
import { LOCALE_STORAGE_KEY } from "@/lib/i18n/locales";
import { themeBootScript } from "@/lib/theme";
import "./globals.css";
import "@/styles/cybercrest/index.css";
import "@/styles/theme-light.css";

const localeBootScript = `try{var l=localStorage.getItem(${JSON.stringify(LOCALE_STORAGE_KEY)});if(l){document.documentElement.lang=l;document.documentElement.setAttribute("data-locale",l);}}catch(e){}`;

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin", "latin-ext", "cyrillic", "greek"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HawkBytes — Quantum Research, AI Products & Software",
  description:
    "HawkBytes is a product and research company focused on quantum computing research, AI products, and software — with web, mobile, and QA services to help you ship.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#040410",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${robotoMono.variable} ${notoSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <script dangerouslySetInnerHTML={{ __html: localeBootScript }} />
        <VideoBlackKeyFilter />
        <Providers>
          {children}
          <HawkBytesChat />
        </Providers>
      </body>
    </html>
  );
}
