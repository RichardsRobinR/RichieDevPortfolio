
import Hero from "./components/Hero";
import Widgets from "./components/Widgets";
import SecondSection from "./components/SecondSection.tsx";
import ThirdSection from "./components/ThirdSection.tsx";
import ContactSection from "./components/ContactSection.tsx";


const App = () => {
  return(
    <>
    <Hero/>
    <SecondSection/>
    {/* <ProjectCards/> */}
    <Widgets/>
    <ThirdSection/>
    <ContactSection/>
    </>
  );
}

export default App;
