import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { AppleHelloEnglishEffect } from "@/components/ui/shadcn-io/apple-hello-effect";
export function TextareaDemo() {
  return (
    <div className="grid w-full gap-3">
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  )
}

export function CountButton(){
  const [count, setCount] = useState(0)
  return (
    <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
     </Button>
  )
}
const AppleHelloEffectDemo = () => {
  return (
    <div className="flex w-full h-screen flex-col justify-center items-center gap-16">
      <AppleHelloEnglishEffect speed={1.1} />
    </div>
  );
};
export default AppleHelloEffectDemo;




