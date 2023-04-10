import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const initialPassword = localStorage.getItem('password');

export const passwordAtom = atomWithStorage(
  'password',
  initialPassword ? JSON.parse(initialPassword) : '',
);

export const isAuthenticatedAtom = atom(get => get(passwordAtom) === process.env.NEXT_PUBLIC_PASS);
