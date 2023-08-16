import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import Brands from "./Brands";
import Steps from "./Steps";
import Service from "./Service";
import Service2 from "./Service2";
import Footer from "./Footer";
import Fleet from "./Fleet";
import Testimonial1 from "./sliders/Testimonial1";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Brands />
      <Steps />
      <Service />
      <Service2 />
      <Fleet />
      <Testimonial1 />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
