import "./globals.css";

type Props = {
  children: React.ReactNode;
};

export const metadata = {
  title: "Alex && Heather's Wedding",
  description: "Welcome to our wedding website",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
