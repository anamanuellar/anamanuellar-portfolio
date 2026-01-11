import { notFound } from "next/navigation";
import { locales } from "@/lib/i18n";
import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  return (
    <>
    <div id="top" />
      <Hero />
      <WhatIDo />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
