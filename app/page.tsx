import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FrameSection from "@/components/FrameSection";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Features />
        <FrameSection />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
