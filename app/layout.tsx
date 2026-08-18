import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const ubuntu = localFont({
  src: [
    {
      path: "../fonts/Ubuntu-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Ubuntu-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Ubuntu-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Ubuntu-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "مسار التميز",
  description: "منصة مسار التميز",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${ubuntu.variable} font-sans`}>
      
        {children}
       
        
      </body>
    </html>
  );
}