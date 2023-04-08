import Link from "next/link";
import Image from "next/image";
import onOneKnee from "./static/knee.jpg";
import { redirect } from "next/navigation";

export default function Home() {
  const password = true;
  if (!password) {
    redirect("/password");
  }
  return (
    <main>
      Welcome to Our Wedding Website
      <div>
        <Link href="/about-us">**About Us Page**</Link>
        <Image src={onOneKnee} alt="photo of us" width={500} height={500} />
      </div>
    </main>
  );
}
