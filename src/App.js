import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Banner } from "./components/banner/Banner";
import { Features } from "./components/feature/Features";
import { Project } from "./components/project/Project";
import { Resume } from "./components/resume/Resume";
import { Contact } from "./components/contact/Contact";
function App() {
  return <div className="w-full h-auto bg-bodyColors text-lightText ">
        <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar/>
        <Banner/>
        <Features />
        <Project/>
        <Resume/>
        <Contact/>
        </div>
  </div>;
}

export default App;
