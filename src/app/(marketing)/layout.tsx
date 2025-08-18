import React from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import MarketingFooter from '@/components/marketing/Footer'
import "@/styles/themes.css";
import { techSans, techDisplay, designerSans, designerDisplay } from "@/app/fonts";
import ThemeProvider from "@/components/theme/ThemeProvider";
import { Suspense } from "react";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  const fontVars = `${techSans.variable} ${techDisplay.variable} ${designerSans.variable} ${designerDisplay.variable}`;
  return (
    <html lang="fi" className={fontVars}>
      <body style={{ fontFamily: "var(--font-sans-active)" }}>
        <Suspense>
          <ThemeProvider>
            <header role="banner">
              <SiteHeader />
            </header>
            {children}
            <footer role="contentinfo">
              <MarketingFooter />
            </footer>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
