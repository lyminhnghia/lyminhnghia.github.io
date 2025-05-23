import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lý Minh Nghĩa | Software Engineer',
  description:
    'Personal portfolio showcasing my experience in UI development, software engineering, and technical skills',
  keywords: ['Software Engineer', 'React', 'Next.js', 'TypeScript', 'Python', 'FastAPI', 'Node.js'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
