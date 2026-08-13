import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

const SITE_URL = "https://your-domain.com"; // TODO: replace with your real domain
const TITLE = "Vaswar Saha — Full-Stack Developer";
const DESCRIPTION =
  "Vaswar Saha is a full-stack developer building fast, accessible, and beautiful web experiences with Next.js, React, and TypeScript.";

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
      </Head>

      {/* Skip link for keyboard/screen-reader users, hidden until focused */}
      <a
        href="#main-content"
        className="glass fixed left-4 top-4 z-[100] -translate-y-24 rounded-full px-4 py-2 text-sm font-medium text-gray-900 transition-transform focus:translate-y-0 dark:text-white"
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
