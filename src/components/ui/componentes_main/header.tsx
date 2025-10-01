import { Prometheus } from "@/components/ui/title_prometheus";
import { Vortex } from "@/components/ui/shadcn-io/vortex/vortex";

const Header = () => {
  return (
    <>
      <div className="w-full h-2/3 mx-auto rounded-md overflow-hidden">
        <Vortex
          backgroundColor="currentColor"
          particleCount={300}
          baseHue={220}
          baseSpeed={0.0}
          rangeSpeed={1.5}
          className="flex items-center justify-center"
        >
          <Prometheus />
        </Vortex>
      </div>
    </>
  );
};
export default Header;
