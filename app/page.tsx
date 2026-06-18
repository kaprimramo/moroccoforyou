import { redirect } from 'next/navigation';

export default function RootPage() {
  // Kiy-sifet nishan l l-Home page default dial l-English
  redirect('/en/');
}