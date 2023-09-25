import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import {notFound} from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";
import Providers from "./providers";

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
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Header/>
            {children}
            {/* <Footer /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
