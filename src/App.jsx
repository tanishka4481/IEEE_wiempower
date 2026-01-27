import HeroPage from "./components/HeroPage";
import FAQ from "./components/FAQ";
import TracksPage from "./components/TracksPage";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Navbar from "./components/Navbar";

// import TracksPage from "./components/TracksPage";
import Events from "./components/Events";
// import Judges from "./components/Judges";
// import Sponsors from "./components/Sponsors";
// import FAQ from "./components/FAQ";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <About />
      <Schedule />
      <TracksPage />
      <Events />
      <FAQ />
    {/* <Judges />
      <Sponsors />
      <Footer /> */}
    </>
  );
}

export default App;
