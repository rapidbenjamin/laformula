import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import {notFound} from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";
import Providers from "./providers";
import { Analytics } from '@vercel/analytics/react';


const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "La Formula Capital Group",
  description: "LA FORMULA",
};

type Props = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export function generateStaticParams() {
  return ['en', 'es'].map((locale) => ({locale}));
}

export default async function LocaleLayout({ children, params: { locale  } }: Props) {
  // let messages;
  const messages = await getMessages(locale);
  // try {
  //   console.log({locale});
  //   messages = (await import(`../../messages/${locale}.json`)).default;
  // } catch (error) {}

  return (
    <html suppressHydrationWarning lang={locale}>
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="We enhance your efficiency and competitiveness with specialized B2B solutions." />
          <meta name="keywords" content="Laformula, B2B, solutions" />
          <meta http-equiv="refresh" content="30" />
          <meta property="og:image" content="https://laformulacapitalgroup.com/site.jpg" />
          <meta name="robots" content="max-snippet:100, max-video-preview:10, max-image-preview:large"/>
          <meta name="google-site-verification" content="I37Ip-O2XTrEQW3Fz195um7IY563rnJCSSLxUUgOmEI" />
          <title>La Formular Capital Group</title>
        </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Header/>
            {children}
            <Analytics mode={'production'} />
            {/* <Footer /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
