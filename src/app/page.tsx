'use client';

import Link from 'next/link';
import Image from 'next/image';
import onOneKnee from './static/knee.jpg';
import { redirect } from 'next/navigation';
import { useAtomValue, useSetAtom } from 'jotai';
import { isAuthenticatedAtom, passwordAtom } from './atoms';

export default function Home() {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const setPassword = useSetAtom(passwordAtom);

  console.log('isAuthenticated', isAuthenticated);
  if (!isAuthenticated) {
    redirect('/password');
  }

  return (
    <main>
      Welcome to Our Wedding Website
      <div>
        <button onClick={() => setPassword('')}>LOG OUT</button>
        <Link href='/about-us'>**About Us Page**</Link>
        <Image priority src={onOneKnee} alt='photo of us' width={500} height={500} />
      </div>
    </main>
  );
}
