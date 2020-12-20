import { Layout, OvalItem, TitleBox } from "./Utils";
import {
  Header,
  BannerSection,
  AboutSection,
  ServicesSection,
  EnquirySection,
  AdvantagesSection,
} from "./Components";
function App() {
  return (
    <Layout>
      <Header />
      <BannerSection />
      <AboutSection />
      <ServicesSection />
      <AdvantagesSection />
      <EnquirySection />
    </Layout>
  );
}

export default App;
