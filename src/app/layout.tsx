import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexandra Philibert — Product Manager & Builder no-code / IA",
  description: "Product manager & product builder no-code et IA. Fondatrice de Light Geek, studio no-code & automatisation IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
