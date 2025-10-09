import Landing_Card from "@/components/ui/componentes_main/diseño_card";
import { Footer } from "@/components/ui/componentes_main/footer";
import Background from "@/components/ui/componentes_main/background";
import { Title } from "@/components/ui/title";
import { BotonInicio } from "@/components/ui/componentes_main/boton_inicio";

const HomePage = () => {
  return (
    <Background>
    <div className="flex flex-col justify-between min-h-screen">
      <main className="flex flex-col justify-center items-center py-6 sm:py-10 md:pt-16 lg:pt-20 xl:pt-24">
        <Title 
          title="PROMETHEUS"
          delay={100}
          className="font-semibold text-gray-100 drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)] text-4xl sm:text-6xl md:text-8xl mb-8 text-center" 
        />
        <Title
          title="Bienvenido a Prometeo, el hub que unifica el control de dispositivos y servicios con el agente Hermes."
          delay={10}
          className="scroll-m-20 text-xl font-bold tracking-tight text-gray-300 mb-12 px-4 sm:px-0"
        />
        <BotonInicio
          className="text-xl"
          onClick={() => window.open("https://prometeo.miguelprez.es/", "_blank")}
        />
        <Landing_Card  />
      </main>
      <Footer />
    </div>
  </Background>
  );
};
export default HomePage;
