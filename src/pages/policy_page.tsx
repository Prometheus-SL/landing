import { Title } from "@/components/ui/title";
import Background from "../components/ui/componentes_main/background";

function PolicyPage() {
  return (
    <Background>
      <div className="flex flex-col justify-between min-h-screen">
        <main className="flex flex-col justify-center items-center py-6 sm:py-10 md:pt-16 lg:pt-20 xl:pt-24">
        <Title 
          title="POLICY"
          delay={100}
          className="font-semibold text-gray-100 drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)] text-4xl sm:text-6xl md:text-7xl mb-8 text-center" 
        />
        </main>
      </div>
    </Background>
  );
}
export default PolicyPage;
