import { ThemeProvider } from '@/context/ThemeContext';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import FloatingActions from '@/components/FloatingActions';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Schemes from '@/components/sections/Schemes';
import Gallery from '@/components/sections/Gallery';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <WhyChooseUs />
        <Schemes />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </ThemeProvider>
  );
}

export default App;
