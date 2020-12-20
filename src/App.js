import { Layout, OvalItem, TitleBox } from "./Utils";
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "14rem",
        }}
      >
        <OvalItem variant="blue" title="Reason Code Mapping" />
        <OvalItem variant="yellow" title="Virtual Assistant" />
      </div>
    </Layout>
  );
}

export default App;
