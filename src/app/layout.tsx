import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StoryMinds - Genera Historias Unicas con IA",
  description: "Crea historias increibles y unicas con Inteligencia Artificial. 100% gratis.",
  keywords: ["historias con IA","generador de historias","StoryMinds"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
