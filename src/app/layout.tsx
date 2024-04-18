import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Home", template: "%s | The NEXTERIAS" },
  description: "学生によるオープンソースソフトウェア開発集団",
  icons: [{ rel: "icon", type: "image/svg+xml", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
