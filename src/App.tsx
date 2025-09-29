import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AppleHelloEnglishEffect } from "@/components/ui/shadcn-io/apple-hello-effect";
import { ModeToggle } from "./components/mode-toggle";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex w-full h-screen flex-col justify-center items-center gap-16">
        <AppleHelloEnglishEffect speed={1.1} />
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
