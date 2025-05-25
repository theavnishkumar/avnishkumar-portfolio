import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import "./globals.css";

export default function Home() {
  return (
    <>
      <main className="max-[320px]:hidden">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <main className="min-[320px]:hidden flex flex-col items-center justify-center w-svw min-h-svh p-4">
        <p className="text-xl font-semibold">
          Your device resolution is too small to view this page.
        </p>
        <p className="text-xl font-semibold">
          Open this page on device larger than 320px.
        </p>
      </main>
    </>
  );
}
