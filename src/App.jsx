import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Top from "./components/Top";
import Hero from "./components/Hero";
import Landscaping from "./components/Landscaping";
import About from "./components/About";
import Team from "./components/Team";
import Subscribe from "./components/Subscribe";
import Testimonials from "./components/Testimonials";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader setLoading={setLoading} />}
      {!loading && (
        <div>
          <Top />
          <Navbar />
          <main>
            <Hero />
            <Landscaping />
            <About />
            <Team />
            <Testimonials />
            <Subscribe />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
