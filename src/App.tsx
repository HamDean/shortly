import Boost from "./components/Boost";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="mx-5 md:mx-20 lg:mx-32">
        <Navbar />
        <main className="mt-24">
          <Hero />
          <Boost />
        </main>
      </div>
    </>
  );
}

export default App;
