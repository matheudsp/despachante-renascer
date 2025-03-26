import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Hero from "@/components/sections/Hero";


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pt-br">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-full">
            <Navbar />
            <main className="mx-auto w-full flex-grow">
              {children}
            </main>
            <footer className="w-full flex  items-center justify-center py-4 bg-primary text-white text-sm">
              <div className="w=full flex text-center  flex-col md:flex-row gap-2 items-center  justify-center">
                <span className="text-base font-normal">Todos os direitos reservados © - 2025 - Renascer Despachante</span>
                <span className="hidden md:flex mx-2">|</span>
                <div className="flex-row"><span className="text-gray-100">Desenvolvido por</span>
                <Link
                  href="https://valedosoltec.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline ml-1"
                >
                  Vale do Sol Tec
                </Link></div>
              </div>
             
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
