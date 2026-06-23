import CommunitySection from "./components/CommunitySection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-paper">
      <Header />
      <Hero />
      <CommunitySection />
      <Footer />
    </div>
  );
}
