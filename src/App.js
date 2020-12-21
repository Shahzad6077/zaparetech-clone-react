import { Layout } from "./Utils";
import {
  Header,
  BannerSection,
  AboutSection,
  ServicesSection,
  EnquirySection,
  AdvantagesSection,
  HeroSection,
  FooterSection,
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
      <FooterSection />
    </Layout>
  );
}

export default App;
