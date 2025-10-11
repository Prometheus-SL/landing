import LogoLoop from "@/components/LogoLoop";
import { CardBody, CardContainer, CardItem } from "../3d-card";
import AnimatedIcon from "./icon";
import { IconGithub, IconReact, IconRust, IconTailwindcss, IconTypescript} from "./react-icons/iconos_programacion";
const techLogos = [
  { node: <IconReact />, title: "React", href: "https://react.dev" },
  { node: <IconGithub />, title: "GitHub", href: "https://github.com" },
  { node: <IconTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <IconTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <IconRust />, title: "Rust", href: "https://www.rust-lang.org" },
];



export function AboutUs() {
    return (
        <div className="flex justify-center mt-10">
            <CardContainer className="px-5 group-hover/card:rotate-[-10deg] transition-all duration-500">
                <CardBody className="relative group/card  w-auto sm:w-[100rem] h-auto rounded-xl p-4 border">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 text-white w-full"
                    >
                        <div className="mb-4 font-semibold text-gray-100 drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)] text-4xl mb-8 text-center">About us</div>
                    </CardItem>
                    <CardItem
                        translateZ="50"
                        className="text-md font-medium text-neutral-600 dark:text-white w-full"
                    >
                        <p className="mb-4 font-semibold text-gray-100 drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)] text-2xl mb-8 text-justify">Hi, we're a team of developers with a passion for building scalable and efficient web applications.
                        <br />We are transforming the way we search for information with visual intelligence. Point your camera, recognize objects, text, and places, and get instant answers. 
                        Our mission is to make information accessible to everyone, quickly, easily, and reliably.
                        </p>
                        
                        
                    </CardItem>
                    <CardItem
                        translateZ="50"
                        className="w-full py-4"
                    >
                        <LogoLoop 
                            logos={techLogos}
                            speed={100}
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