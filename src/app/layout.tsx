// 'use server'; //weird 
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "MVPA React Examples",
  description: "A example of the MVPA design patterning on Next.js.",
  icons: {
    icon: '/images/favicons/favicon.ico',
    shortcut: '/images/favicons/favicon.ico',
    apple: '/images/favicons/apple-touch-icon.png',
    href: '/images/favicons/favicon.ico'
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <head>
          <script type="module" src="dynamicVal.js" /> 
        </head>
        <body className={` antialiased`}>
            <div className="min-h-screen">
              layout.tsx
              <div className="lg:col-span-9">{children}</div>
            </div>
        </body>
      </html>
  );
}
