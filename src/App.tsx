import Boost from "./components/Boost";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <main className="">
          <Hero />
          <Boost />
          <Stats />
        </main>
      </div>
    </>
  );
}

export default App;
