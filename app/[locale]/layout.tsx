import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "../globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ModalProvider } from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { cn } from "@/lib/utils";
import { ThemeProvider } from 'next-themes'
import { ThemesView } from "@/enum/themes";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from 'next-intl';

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
            <Navbar
              locale={locale}
            />
            {children}
            <Footer/>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout
