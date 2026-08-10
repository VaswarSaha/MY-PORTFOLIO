import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vaswar Saha — Full-Stack Developer</title>
        <meta
          name="description"
          content="Vaswar Saha is a full-stack developer building fast, accessible, and beautiful web experiences with Next.js, React, and TypeScript."
        />
      </Head>

      <Header />

      <main>
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