import type {Metadata, Viewport} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'vietnamese'] });

export const metadata: Metadata = {
  title: 'Nam & An Honeymoon',
  description: 'Lịch trình tuần trăng mật của Nam và An',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Honeymoon',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: '#f43f5e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="vi">
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-900`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
