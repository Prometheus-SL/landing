
import { AboutUs } from "./aboutus";
import { CardGithub } from "./card_github";



export function Landing_Card() {
  return (
    <>
    <div className="flex justify-center">
      <CardGithub />
    </div>
    <div className="flex justify-center mt-10">
      <AboutUs />
    </div>
    </>
  );
}

export default Landing_Card;
