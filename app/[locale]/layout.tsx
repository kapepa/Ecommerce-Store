import type { Metadata } from "next";
import { ModalProvider } from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from 'next-intl';
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CurrencyProvider } from "@/providers/currency-provider";

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  console.log(locale)
  
  return (
    <NextIntlClientProvider 
        messages={messages}
      >
      <ModalProvider/>
      <ToastProvider/>
      <CurrencyProvider>
        <Navbar
          locale={locale}
        />
          {children}
        <Footer/>
      </CurrencyProvider>
    </NextIntlClientProvider>
  );
}

export default RootLayout;