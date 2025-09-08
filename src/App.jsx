import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Top from "./components/Top";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader setLoading={setLoading} />}
      {!loading && (
        <div>
          <Top/>
          <Navbar />
          <main className="pt-20">
            {/* Sections will go here (Hero, About, Services, etc.) */}
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}