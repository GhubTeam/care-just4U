
import { Outfit } from "@next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], 
  variable: "--font-outfit",
});

export const metadata = {
  title: "Care Just4U",
  description: "A company dedicated to taking care of people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}
