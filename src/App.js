import { Layout } from "./Utils";
import {
  Header,
  BannerSection,
  AboutSection,
  ServicesSection,
  EnquirySection,
  AdvantagesSection,
  HeroSection,
} from "./Components";
function App() {
  return (
    <Layout>
      <Header />
      <BannerSection />
      <AboutSection />
      <ServicesSection />
      <AdvantagesSection />
      <HeroSection />
      <EnquirySection />
    </Layout>
  );
}

export default App;
