import Head from "next/head";
import Hero from "../components/hero.js";
import Contact from "../components/contact.js";
import Footer from "../components/footer.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Big Sky Handyman</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/hammer-outline.svg" />
      </Head>
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
