import About from '@/components/Homepage/About';
import AboutClients from '@/components/Homepage/AboutClients';
import AreasWeCover from '@/components/Homepage/AreasWeCover';
import IntroSection from '@/components/Homepage/IntroSection';
import ServicesWeProvide from '@/components/Homepage/ServicesWeProvide';
import WorkTogether from '@/components/Homepage/WorkTogether';
import WorkingProcess from '@/components/Homepage/WorkingProcess';

export default function Home() {
  return (
    <div className="mx-auto">
      {/* <Header /> */}
      <IntroSection />
      <About />
      <AreasWeCover />
      <ServicesWeProvide />
      <WorkingProcess />
      <AboutClients />
      <WorkTogether />
      {/* <Footer /> */}
    </div>
  );
}
