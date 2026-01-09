import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import Footer from "./components/Footer";
import AIPortfolioChatbot from "./components/AIPortfolioChatbot";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <Footer />
        </div>
      </div>
      <div></div>
      <AIPortfolioChatbot />
    </BrowserRouter>
  );
};

export default App;
