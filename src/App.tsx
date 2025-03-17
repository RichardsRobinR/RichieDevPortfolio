
import Hero from "./components/section/Hero.tsx";
import Widgets from "./components/section/Widgets.tsx";
import SecondSection from "./components/section/SecondSection.tsx";
import ThirdSection from "./components/section/ThirdSection.tsx";
import ContactSection from "./components/section/ContactSection.tsx";


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
