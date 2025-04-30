import { redirect } from 'next/navigation';

export default function Layout() {
  redirect('/docs');
  
  return null;
}