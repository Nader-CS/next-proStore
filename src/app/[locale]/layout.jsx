import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_NAME, SERVER_URL } from "@/lib/constants";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export const metadata = {
  title: APP_NAME,
  description: "A modern e-commerce platform",
  metadataBase: new URL(SERVER_URL),
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${inter.style} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
