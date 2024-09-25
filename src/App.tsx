import Shortener from "./components/Shortener";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Boost from "./components/Boost";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <Shortener />
          <Stats />
          <Boost />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
