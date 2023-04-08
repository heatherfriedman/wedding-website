type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return <section>THIS IS WHAT IS STATIC{children}</section>;
}
