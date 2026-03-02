import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CalEmbed } from "@/components/sections/cal-embed";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-orange focus:text-dark focus:font-semibold focus:text-sm"
      >
        Aller au contenu principal
      </a>
      <main id="contenu" className="min-h-screen">
        <Navbar />
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="border-cream/10" /></div>
        <Projects />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="border-cream/10" /></div>
        <Services />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="border-cream/10" /></div>
        <HowItWorks />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="border-cream/10" /></div>
        <Testimonials />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="border-cream/10" /></div>
        <FAQ />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="border-cream/10" /></div>
        <CalEmbed />
        <Footer />
      </main>
    </>
  );
}
