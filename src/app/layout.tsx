import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Aline J. de Araujo",
  description: "- Descubra os segredos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Aline J. de Araujo</title>
        <meta
          property="og:title"
          content="Aula Magna sobre Autoexpressão Vocal"
        />
        <meta
          property="og:description"
          content="Participe da Aula Magna Aberta e Gratuita no dia 03/10 às 19h pelo Google Meet."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/ZcPrW3J/photo-2024-09-26-21-08-44.jpg"
        />
        <meta property="og:url" content="https://alinejdearaujo.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Aula Magna sobre Autoexpressão Vocal"
        />
        <meta
          name="twitter:description"
          content="Participe da Aula Magna Aberta e Gratuita no dia 03/10 às 19h pelo Google Meet."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/ZcPrW3J/photo-2024-09-26-21-08-44.jpg"
        />
      </Head>

      <body className={roboto.className}>{children}</body>
    </html>
  );
}
