import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import Header from '@/src/components/Header';
import Navbar from '@/src/components/Navbar';
import SearchBox from '@/src/components/SearchBox';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IMDB Clone',
  description: 'This is movie database clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <>
            <Header />
            <Navbar />
            <SearchBox />
            {children}
          </>
        </Providers>
      </body>
    </html>
  );
}
