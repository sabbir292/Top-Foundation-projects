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
import Blog from "./Blog/Blog";
import Newsletter from "./Newsletter/Newsletter";

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
      <Blog />
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
