import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import LenisProvider from '@/components/LenisProvider';

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta'
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant'
});

export const metadata: Metadata = {
  title: 'Tattvik AI',
  description: 'The future of learning is personal, intelligent, and yours.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased selection:bg-brand-violet selection:text-white bg-base-navy">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
