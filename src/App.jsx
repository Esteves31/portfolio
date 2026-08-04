import Navbar from "./components/Navbar.jsx";
import FirstSection from "./components/FirstSection.jsx";
import AboutMeSection from "./components/AboutMeSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import MySkillsSection from "./components/MySkillsSection.jsx";
import MyProjects from "./components/MyProjects.jsx";
import Blog from "./components/Blog.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <FirstSection />
      <AboutMeSection />
      <ExperienceSection />
      <MySkillsSection />
      <MyProjects />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
