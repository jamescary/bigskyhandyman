import Hero from "../components/hero.js";
import Contact from "../components/contact.js";
import Footer from "../components/footer.js";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <Hero></Hero>
        <div className="divide-y divide-gray-300">
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
