
import { Card, CardContent } from "@/components/ui/card";
import Header from "./components/ui/componentes_main/header";

const App = () => {
  return (
    <>
    <Header />
    <div className="w-2/3 pt-0 p-3 flex justify-left">
      <Card className="w-full max-w-sm">
        <CardContent>
          <p>
            ¿Qué es Prometheus?
            ¿Para que sirver?
            Prometheus es una herramienta de monitoreo y alertas open source diseñada para recopilar y almacenar métricas de tiempo real.
            Es altamente configurable y escalable, lo que la convierte en una elección popular para la monitorización de sistemas y aplicaciones.
            Prometheus se basa en la idea de recopilar métricas de tiempo real de diversas fuentes, como servidores, bases de datos, servicios web, etc.
            Estas métricas se almacenan en un almacén de tiempo y se pueden consultar y visualizar mediante herramientas como Grafana.
          </p>
        </CardContent>
      </Card>
    </div>
    
    </>
    
  );
};
export default App;
