import './globals.css';
import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Younes Kazemi\'s Portfolio',
  description: 'The personal portfolio of Younes Kazemi, an AI enthusiast and web developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Layout>{children}</Layout>;
}