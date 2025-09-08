import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader setLoading={setLoading} />}
      {!loading && (
        <div>
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
