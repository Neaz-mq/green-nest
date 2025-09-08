import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Top from "./components/Top";
import Hero from "./components/Hero";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader setLoading={setLoading} />}
      {!loading && (
        <div>
          <Top/>
          <Navbar />
          <main>
            {/* Sections will go here (Hero, About, Services, etc.) */}
            <Hero />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}