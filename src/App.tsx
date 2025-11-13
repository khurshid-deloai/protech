import Header from './components/Header';
import Footer from './components/Footer';
import Home from './features/Home';
import About from './features/About';
import Products from './features/Products';
import Services from './features/Services';
import ServiceSpecialist from './features/ServiceSpecialist';
import AboutUs from './features/AboutUs';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Home />
        <About />
        <Products />
        <Services />
        <ServiceSpecialist />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
