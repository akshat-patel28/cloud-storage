'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Cloud</title>
        <meta name="description" content="A Cloud Storage System" />
      </head>
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
