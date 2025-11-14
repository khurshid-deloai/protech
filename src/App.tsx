import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./features/Home";
import About from "./features/About";
import Products from "./features/Products";
import Services from "./features/Services";
import ServiceSpecialist from "./features/Network";
import AboutUs from "./features/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      
      <Header />

      <main>

        <section id="home">
          <Home />
        </section>

        {/* Add padding only below Home */}
        <div className="pt-20">
          <section id="about">
            <About />
          </section>

          <section id="products">
            <Products />
          </section>

          <section id="services">
            <Services />
          </section>

          <section id="service-specialist">
            <ServiceSpecialist />
          </section>

          <section id="about-us">
            <AboutUs />
          </section>

          <section id="contact">
            <Footer />
          </section>
        </div>

      </main>
    </div>
  );
}
