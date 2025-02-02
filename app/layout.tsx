import type { Metadata } from 'next';
import { Montserrat, Barlow_Semi_Condensed } from 'next/font/google';
import './global.scss';
import Navbar from '@/components/nav/NavBar';
import Footer from '@/components/footer/footer';
import WhatsAppButton from '@/components/wahtsAppButton/whatsAppButton';

const geistSans = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-montserrat',
});
const geistBarlowSemoCondensed = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-barlow-semi-condensed',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistBarlowSemoCondensed.variable}  antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
