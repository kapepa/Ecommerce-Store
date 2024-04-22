import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ModalProvider } from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { cn } from "@/lib/utils";
import { ThemeProvider } from 'next-themes'
import { ThemesView } from "@/enum/themes";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className, font.className)}>
        <ThemeProvider
          defaultTheme={ThemesView.light}
          attribute="class" 
          enableSystem={false} 
          themes={[ThemesView.light, ThemesView.dark]}
        >
          <ModalProvider/>
          <ToastProvider/>
          <Navbar/>
            {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
