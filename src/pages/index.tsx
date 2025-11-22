import { Geist, Geist_Mono } from 'next/font/google';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}