import Landing_Card from "@/components/ui/componentes_main/diseño_card";
import { Footer } from "@/components/ui/componentes_main/footer";
import Background from "@/components/ui/componentes_main/background";

const HomePage = () => {
  return (
    <Background card={<Landing_Card />} footer={<Footer />}></Background>
  );
};
export default HomePage;
