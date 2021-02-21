import Hero from "../components/hero.js";
import Contact from "../components/contact.js";

export default function Home() {
  return (
    <div>
      <div class="container mx-auto">
        <Hero></Hero>
        <div class="items-center">
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}
