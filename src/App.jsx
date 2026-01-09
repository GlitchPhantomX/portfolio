import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { FloatingDock } from "./components/ui/floating-dock";
import { FloatingDockDemo } from "./components/FloatingDockDemo";
import Footer from "./components/Footer";
import AIPortfolioChatbot from "./components/AIPortfolioChatbot";
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary overflow-hidden'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          {/* <FloatingDockDemo/>*/}
          <Navbar />
         <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          {/* <StarsCanvas /> */}
          <Footer/>
        </div>
      </div>
      <div>
        {/* <FloatingDockDemo/>*/}
      </div>
      <AIPortfolioChatbot/>
    </BrowserRouter>
  );
}

export default App;
