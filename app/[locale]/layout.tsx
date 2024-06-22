import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "../globals.css";
import { ModalProvider } from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { cn } from "@/lib/utils";
import { ThemeProvider } from 'next-themes'
import { ThemesView } from "@/enum/themes";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from 'next-intl';
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CurrencyProvider } from "@/providers/currency-provider";

const font = Urbanist({ subsets: ["latin"] });

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
  
  return (
    <html 
      lang={locale}
      suppressHydrationWarning
    >
      <body className={cn(font.className, font.className)}>
        <ThemeProvider
          defaultTheme={ThemesView.light}
          attribute="class" 
          enableSystem={false} 
          themes={[ThemesView.light, ThemesView.dark]}
        >
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
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;