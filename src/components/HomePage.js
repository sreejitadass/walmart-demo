import Deals from "./Deals.js";
import Footer from "./Footer.js";
import Hero from "./Hero.js";
import Navbar from "./Navbar.js";

export default function HomePage() {
  return (
    <div className="bg-[#e6f1fc]">
      <Navbar />
      <Hero />
      <Deals />
      <Footer />
    </div>
  );
}
