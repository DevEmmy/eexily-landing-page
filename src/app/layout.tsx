import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"] });

export const metadata: Metadata = {
  title: "Eexily",
  description: "With Eexily, you can now stay at home, know how much gas you have left,and order for a refill when you're running low without hassle or extra fees! Tell your neighbors!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
