import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
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

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }, { locale: "pt" }, { locale: "fr" }, { locale: "de" }];
}

export default async function LocaleLayout({ children, params: { locale  } }: Props) {
  let messages;
  try {
    console.log({locale});
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {}

  return (
    <html suppressHydrationWarning lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Header/>
            {children}
            <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
