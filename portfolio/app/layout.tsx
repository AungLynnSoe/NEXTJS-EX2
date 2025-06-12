import "./globals.css";
import Header from "@/app/_components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
