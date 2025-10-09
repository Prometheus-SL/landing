import Landing_Card from "@/components/ui/componentes_main/diseño_card";
import { Footer } from "@/components/ui/componentes_main/footer";
import Background from "@/components/ui/componentes_main/background";
import { Title } from "@/components/ui/title";

const HomePage = () => {
  return (
    <Background>
      <div className="flex flex-col justify-between min-h-screen">
        <main className="flex flex-col justify-center items-center py-10 md:pt-16">
          <Title
            title="PROMETHEUS"
            className="text-8xl mb-8 text-center justify-center"
          />
          <Landing_Card />
        </main>
        <Footer />
      </div>
    </Background>
  );
};
export default HomePage;
