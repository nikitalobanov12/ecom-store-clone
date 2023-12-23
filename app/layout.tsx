import { CartProvider } from "@/components/CartContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecom store sample",
  description: "a simple clone of an ecom store with stripe integration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider><div>{children}</div></CartProvider>
      </body>
    </html>
  );
}
