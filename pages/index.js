import Head from "next/head";
import Hero from "../components/hero.js";
import Skills from "../components/skills.js";
import Contact from "../components/contact.js";
import Footer from "../components/footer.js";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Head>
        <title>Big Sky Handyman</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="shortcut icon" href="/hammer-outline.svg" />
      </Head>
      <div className="container mx-auto">
        <Hero></Hero>
        <div className="divide-y divide-gray-300">
          <div className="grid xl:grid-cols-2 md:grid-cols-1 lg:pl-32">
            <Skills></Skills>
            <Contact></Contact>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
