import { CardBody, CardContainer, CardItem } from "../3d-card";
import Repo_Github from "./github/repo_github";
// import { Card, CardContent } from "../card";
// import Repo_Github from "./github/repo_github";



export function Landing_Card() {
  return (
    <>
    <div className="flex justify-center">
      <CardContainer className="px-5 group-hover/card:rotate-[-10deg] transition-all duration-500">
          <CardBody className="relative group/card  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white w-full py-2"
            >
              Repositorios en GitHub:
              <Repo_Github  />
            </CardItem>
          </CardBody>
        </CardContainer>
    </div>
    </>
  );
}

export default Landing_Card;
