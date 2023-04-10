import './globals.css';

type Props = {
  children: React.ReactNode;
};

export const metadata = {
  title: "Alex && Heather's Wedding",
  description: 'Welcome to our wedding website',
};

// TODO get the right type of layout working so that it stays nice and then work on tabs and such
export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
