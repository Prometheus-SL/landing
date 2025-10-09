import Landing_Card from "@/components/ui/componentes_main/diseño_card";
import { Footer } from "@/components/ui/componentes_main/footer";
import Background from "@/components/ui/componentes_main/background";
import { Title } from "@/components/ui/title";

const HomePage = () => {
  return (
    <Background>
      <Title title="P R O M E T H E U S" />
      <Landing_Card />
      <Footer />
    </Background>
  );
};
export default HomePage;
