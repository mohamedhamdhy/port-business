import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Mohamed Al Hamdhy | Full-Stack Developer UAE',
  description:
    'Full-Stack Developer based in UAE building scalable digital solutions including websites, SaaS platforms, e-commerce, CRM systems, and AI-powered automation tools.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased font-sans bg-[#0A0F2C]">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
