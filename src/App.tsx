import Navbar from '@/components/Navbar';
import ParticleField from '@/components/ParticleField';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Fragrances from '@/components/Fragrances';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Fragrances />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
