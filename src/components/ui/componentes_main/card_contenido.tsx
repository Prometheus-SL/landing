import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Prometheus } from "../title_prometheus";

type ElegantShapeProps = {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
};

type HeroGeometricProps = {
  badge?: string;
  title1?: string;
  title2?: string;
  description?: string;
  className?: string;
};

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: ElegantShapeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export function Contenido({
  description = "Prometheus se especializada en ofrecer experiencias digitales",
  className,
}: HeroGeometricProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <div className={cn("relative min-h-screen w-full justify-center overflow-hidden bg-[#030303]", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <Prometheus />
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              {description}
            </p>
          </motion.div>
        </div>
        <div className="flex">
          <div className="pt-4 px-4">
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

          <div className="pt-4 px-4">
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
        <div className="flex">
          <div className="w-1/2 pt-4 px-4">
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

          <div className="w-1/2 pt-4 px-4">
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
        
      </div>
      <div className="flex justify-center pt-4">
        <div className="pt-4 px-4 font-bold text-center">
          © 2025 Prometheus SL. All rights reserved.
        </div>
        <div className="pt-4 px-4 font-bold text-center">
          Policy
        </div>
        <div className="pt-4 px-4 font-bold text-center">
          About us
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
      
    </div>
  );
}

export default Contenido;