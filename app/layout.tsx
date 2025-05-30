import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Python School",
  description: "Solve Python coding challenges and improve your skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-backgroundgrey`}>
        <div className="min-h-screen bg-gradient-to-br from-backgroundgrey to-backgroundblue select-none">
          <Header />
          <div className="max-w-[1280px] mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
