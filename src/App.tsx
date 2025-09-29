import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AppleHelloEnglishEffect } from "@/components/ui/shadcn-io/apple-hello-effect";
import { ModeToggle } from "./components/mode-toggle";
import { Vortex } from "./components/ui/shadcn-io/vortex";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
    <div className="h-screen w-full overflow-hidden">
      <Vortex
        backgroundColor="black"
        particleCount={700}
        baseHue={220}
        baseSpeed={0.0}
        rangeSpeed={1.5}
        className="flex items-center justify-center w-full h-full"
      >
        {/* Your content floats above the vortex */}
        <div className="text-center text-white z-10">
          <h1 className="text-6xl font-bold mb-4">
            <AppleHelloEnglishEffect speed={1.1} />
          </h1>
          <p className="text-xl opacity-80">
            Welcome to Prometeo
          </p>
        </div>
      </Vortex>
    </div>
      <div className="flex w-full h-screen flex-col justify-center items-center gap-16">
        
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <ModeToggle />
      </div>
      <div className="fixed bottom-4 right-4 opacity-50 hover:opacity-100 transition">
        <ModeToggle />
      </div>
    </>
  );
};
export default App;
