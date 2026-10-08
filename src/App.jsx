import About from "./components/About";
import BackToTop from "./components/BackToTop";
import BookCTA from "./components/BookCTA";
import Contact from "./components/Contact";
import Credentials from "./components/Credentials";
import FAQ from "./components/FAQ";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Process from "./components/Process";
import SessionTypes from "./components/SessionTypes";
import SkillsGrid from "./components/SkillsGrid";
import Testimonials from "./components/Testimonials";
import UpcomingCamps from "./components/UpcomingCamps";
import WhoWeCoach from "./components/WhoWeCoach";
import WhyGainLine from "./components/WhyGainLine";

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-100 focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>

      <Header />

      <main>
        {/* Pitch → proof → offer → detail → reassurance → ask */}
        <Hero />
        <Credentials />
        <SessionTypes />
        <About />
        <WhoWeCoach />
        <WhyGainLine />
        <Process />
        <SkillsGrid />
        <Testimonials />
        <Partners />
        <UpcomingCamps />
        <Feed />
        <FAQ />
        <BookCTA />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
