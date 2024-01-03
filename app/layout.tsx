// import './globals.css';
import { Inter } from 'next/font/google';
import { EXAMPLE_PATH, CMS_NAME } from '@/lib/constants';
import Script from 'next/script';

import { Head } from './head';

export const metadata = {
  title: `Next.js and ${CMS_NAME} Example`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <Head />
      <body>
        <section className="min-h-screen">
          <main>{children}</main>
        </section>
        <Script
          src="https://widgets.bestmoney.com/apps/loader.js"
          data-ni-publisher-id="63b3ed4bf49d067ea64d6736"
          data-debug-mode="1"
          data-slots-disabled-="1"
        />
      </body>
    </html>
  );
}
