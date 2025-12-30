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
      <main className="min-[320px]:hidden flex flex-col items-center justify-center w-full min-h-svh p-4 text-center gap-4">
        <p className="text-lg md:text-xl font-semibold">
          Your device resolution is too small to view this page.
        </p>
        <p className="text-lg md:text-xl font-semibold">
          Please open this page on a device with a screen width larger than 320px.
        </p>
        <p className="text-sm text-gray-600">
          For the best experience, rotate your device to landscape mode or use a larger device.
        </p>
      </main>
    </>
  );
}
