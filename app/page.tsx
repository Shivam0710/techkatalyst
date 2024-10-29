import About from '@/components/Homepage/About';
import AboutClients from '@/components/Homepage/AboutClients';
import AreasWeCover from '@/components/Homepage/AreasWeCover';
import Header from '@/components/Header';
import IntroSection from '@/components/Homepage/IntroSection';
import ServicesWeProvide from '@/components/Homepage/ServicesWeProvide';
import WorkTogether from '@/components/Homepage/WorkTogether';
import WorkingProcess from '@/components/Homepage/WorkingProcess';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="max-w-[1425px] mx-auto">
      <Header />
      <IntroSection />
      <About />
      <AreasWeCover />
      <ServicesWeProvide />
      <WorkingProcess />
      <AboutClients />
      <WorkTogether />
      <Footer />
    </div>
  );
}
