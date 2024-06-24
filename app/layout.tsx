import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from 'next-themes'
import { ThemesView } from "@/enum/themes";


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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;