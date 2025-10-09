import { CardBody, CardContainer, CardItem } from "../3d-card";
import Repo_Github, { Repo_Github_Item } from "./github/repo_github";
// import { Card, CardContent } from "../card";
// import Repo_Github from "./github/repo_github";

export function Landing_Card() {
  return (
    <>
    <div className="flex justify-center">
      <div>
        <CardContainer className="px-5 group-hover/card:rotate-[-10deg] transition-all duration-500">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              ¿Qué es Prometheus? ¿Para que sirve? <b>Prometheus</b> es una
              herramienta de monitoreo y alertas open source diseñada para
              recopilar y almacenar métricas de tiempo real. Es altamente
              configurable y escalable, lo que la convierte en una elección
              popular para la monitorización de sistemas y aplicaciones.
              Prometheus se basa en la idea de recopilar métricas de tiempo real
              de diversas fuentes, como servidores, bases de datos, servicios
              web, etc. Estas métricas se almacenan en un almacén de tiempo y se
              pueden consultar y visualizar mediante herramientas como Grafana.
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
      <div>
        <CardContainer className="px-5 group-hover/card:rotate-[-10deg] transition-all duration-500">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              <Repo_Github />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
    </>
  );
}

export default Landing_Card;
