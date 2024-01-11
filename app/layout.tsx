'use client';

import './globals.css';

import { UnifiedFooter } from '@xsite-ui/common.footer/unified-footer';
import SetoffBox from '@xsite-ui/top10.setoff-box';
import { Top10ThemeProvider } from '@xsite-ui/top10.theme';

import { Head } from './head';
import { NavBar } from './nav-bar';

import footerProps from './data/footer-props.json';
import setOffBoxProps from './data/set-off-box-props.json';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Top10ThemeProvider>
          <SetoffBox {...setOffBoxProps} />
          <NavBar />
          <main
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '0 auto',
              maxWidth: '1200px',
              padding: '0 16px',
            }}
          >
            {children}
          </main>
          <UnifiedFooter unifiedFooterContent={footerProps} />
        </Top10ThemeProvider>
      </body>
    </html>
  );
}
