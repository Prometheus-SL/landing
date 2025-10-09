import { Card, CardContent } from "../card";
import Repo_Github from "./github/repo_github";

export function Landing_Card() {
  return (
    <>
      <div className="flex ">
        <div className="w-1/2 pt-4 px-4 ">
          <Card>
            <CardContent>
              <p>
                ¿Qué es Prometheus? ¿Para que sirve? <b>Prometheus</b> es una
                herramienta de monitoreo y alertas open source diseñada para
                recopilar y almacenar métricas de tiempo real. Es altamente
                configurable y escalable, lo que la convierte en una elección
                popular para la monitorización de sistemas y aplicaciones.
                Prometheus se basa en la idea de recopilar métricas de tiempo
                real de diversas fuentes, como servidores, bases de datos,
                servicios web, etc. Estas métricas se almacenan en un almacén de
                tiempo y se pueden consultar y visualizar mediante herramientas
                como Grafana.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="w-1/2 pt-4 px-4 ">
          <Card>
            <CardContent>
              <p>
                <Repo_Github />
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 pt-4 px-4 ">
          <Card>
            <CardContent>
              <p>
                ¿Qué es Prometheus? ¿Para que sirve? <b>Prometheus</b> es una
                herramienta de monitoreo y alertas open source diseñada para
                recopilar y almacenar métricas de tiempo real. Es altamente
                configurable y escalable, lo que la convierte en una elección
                popular para la monitorización de sistemas y aplicaciones.
                Prometheus se basa en la idea de recopilar métricas de tiempo
                real de diversas fuentes, como servidores, bases de datos,
                servicios web, etc. Estas métricas se almacenan en un almacén de
                tiempo y se pueden consultar y visualizar mediante herramientas
                como Grafana.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="w-1/2 pt-4 px-4 ">
          <Card>
            <CardContent>
              <p>
                ¿Qué es Prometheus? ¿Para que sirve? <b>Prometheus</b> es una
                herramienta de monitoreo y alertas open source diseñada para
                recopilar y almacenar métricas de tiempo real. Es altamente
                configurable y escalable, lo que la convierte en una elección
                popular para la monitorización de sistemas y aplicaciones.
                Prometheus se basa en la idea de recopilar métricas de tiempo
                real de diversas fuentes, como servidores, bases de datos,
                servicios web, etc. Estas métricas se almacenan en un almacén de
                tiempo y se pueden consultar y visualizar mediante herramientas
                como Grafana.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="w-full pt-4 px-4">
        <Card>
          <CardContent>
            <p>
              ¿Qué es Prometheus? ¿Para que sirve? <b>Prometheus</b> es una
              herramienta de monitoreo y alertas open source diseñada para
              recopilar y almacenar métricas de tiempo real. Es altamente
              configurable y escalable, lo que la convierte en una elección
              popular para la monitorización de sistemas y aplicaciones.
              Prometheus se basa en la idea de recopilar métricas de tiempo real
              de diversas fuentes, como servidores, bases de datos, servicios
              web, etc. Estas métricas se almacenan en un almacén de tiempo y se
              pueden consultar y visualizar mediante herramientas como Grafana.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Landing_Card;
