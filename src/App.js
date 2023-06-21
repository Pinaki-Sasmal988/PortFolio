// import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Banner } from "./components/banner/Banner";
import { Features } from "./components/feature/Features";
import { Project } from "./components/project/Project";
import { Resume } from "./components/resume/Resume";
import { Contact } from "./components/contact/Contact";
function App() {
  return <div className="w-full h-auto bg-bodyColors text-lightText px-3">
        <Navbar/>
        <div className="max-w-screen-xl mx-auto">
        <Banner/>
        <Features />
        <Project/>
        <Resume/>
        <Contact/>
        </div>
  </div>;
}

export default App;
