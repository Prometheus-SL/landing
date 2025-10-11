import LogoLoop from "@/components/LogoLoop";
import { CardBody, CardContainer, CardItem } from "../3d-card";
import AnimatedIcon from "./icon";
import { IconGithub, IconReact, IconRust, IconTailwindcss, IconTypescript} from "./react-icons/iconos_programacion";
const techLogos = [
  { node: <IconReact />, title: "React", href: "https://react.dev" },
  { node: <IconGithub width="1em" height="1em"/>, title: "GitHub", href: "https://github.com/Prometheus-SL" },
  { node: <IconTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <IconTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <IconRust />, title: "Rust", href: "https://www.rust-lang.org" },
];



export function AboutUs() {
    return (
        <div className="flex justify-center">
            <CardContainer className="px-5 group-hover/card:rotate-[-10deg] transition-all duration-500">
                <CardBody className="relative group/card  w-auto sm:w-[60rem] h-auto rounded-xl p-4 border">
                    <CardItem
                        translateZ="50"
                        className="w-full"
                    >
                        <div className="mb-4 font-semibold text-gray-100 drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)] text-7xl mb-8 text-center">About us</div>
                    </CardItem>
                    <CardItem
                        translateZ="50"
                        className="text-md font-medium text-neutral-600 dark:text-white w-full"
                    >
                        <section
                        id="about-us"
                        style={{
                            maxWidth: "900px",
                            margin: "0 auto",
                            padding: "40px",
                            fontFamily: "Arial, sans-serif",
                            lineHeight: 1.6,
                            textAlign: "center",
                        }}
                    >
                        <p>
                            We are a team of developers passionate about creating scalable and efficient web applications. 
                            Our journey began in 2023 with a simple goal: to make smart technology accessible and useful 
                            in every environment, from homes to offices and commercial spaces.
                        </p>
                        
                        <p>
                            Our platform enables you to control, monitor, and automate devices seamlessly, making life 
                            and work simpler, safer, and more efficient. We leverage IoT and cloud technologies to deliver 
                            real-time, reliable, and scalable solutions tailored to any space.
                        </p>
                        
                        <p>
                            At the core of our work are our values: innovation, user privacy, and efficiency. Our diverse 
                            team of developers, designers, and engineers is dedicated to building intuitive smart ecosystems 
                            that truly improve everyday life.
                        </p>
                    </section>
                    </CardItem>
                    <CardItem
                        translateZ="50"
                        className="w-full py-4"
                    >
                        <LogoLoop 
                            logos={techLogos}
                            speed={75}
                            direction="right"
                            logoHeight={48}
                            gap={40}
                            pauseOnHover
                            scaleOnHover
                            ariaLabel="Technology partners"                        
                        />

                    </CardItem>
                    <CardItem
                        translateZ="50"
                        className="w-full flex justify-center"
                    >
                        <AnimatedIcon />
                    </CardItem>
                </CardBody>
            </CardContainer>
        </div>
    );

}