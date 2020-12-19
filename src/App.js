import { Layout, TitleBox } from "./Utils";
import {
  Header,
  BannerSection,
  AboutSection,
  ServicesSection,
} from "./Components";
function App() {
  return (
    <Layout>
      <Header />
      <BannerSection />
      <AboutSection />
      <ServicesSection />
    </Layout>
  );
}

export default App;
