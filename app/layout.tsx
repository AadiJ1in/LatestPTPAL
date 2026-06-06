import "./globals.css";

export const metadata = {
  title: "PTPAL",
  description: "Level Up Your Recovery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
