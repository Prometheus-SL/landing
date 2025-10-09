import Background from "./background";
import Landing_Card from "./diseño_card";
import { Footer } from "./footer";


export function Contenido(){
  

  return (
    <Background 
    card={<Landing_Card />}
    footer={<Footer />}
    >
    </Background>
  );
}


export default Contenido;
