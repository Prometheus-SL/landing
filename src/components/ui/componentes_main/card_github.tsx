
import { CardBody, CardContainer, CardItem } from "../3d-card";
import Repo_Github from "./github/repo_github";
import { IconGithub } from "./react-icons/iconos_programacion";


export function CardGithub() {
    return (
        <div className="flex justify-center">
              <CardContainer className="px-5 group-hover/card:rotate-[-10deg] transition-all duration-500">
                  <CardBody className="relative group/card  w-auto sm:w-[60rem] h-auto rounded-xl p-4 border">
                    <CardItem
                      translateZ="50"
                      className="w-full"
                    >
                      
                      <div className="flex items-center justify-center mb-4 text-3xl font-semibold text-gray-100 drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)]">
                            <IconGithub 
                                width="110px"
                                height="80px"
                            /> 
                            GitHub Repositories
                        </div>
                      <Repo_Github  />
                    </CardItem>
                  </CardBody>
                </CardContainer>
            </div>
    );
    
};