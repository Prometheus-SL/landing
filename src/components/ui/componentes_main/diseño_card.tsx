import { CardBody, CardContainer, CardItem } from "../3d-card";
import Repo_Github from "./github/repo_github";
import { AboutUs } from "./aboutus";



export function Landing_Card() {
  return (
    <>
    <div className="flex justify-center">
      <CardContainer className="px-5 group-hover/card:rotate-[-10deg] transition-all duration-500">
          <CardBody className="relative group/card  w-auto sm:w-[40rem] h-auto rounded-xl p-4 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white w-full"
            >
              <div className="text-xl font-semibold py-4">Github Repositories:</div>
              <Repo_Github  />
            </CardItem>
          </CardBody>
        </CardContainer>
    </div>
    <div className="flex justify-center">
      <AboutUs />
    </div>
    </>
  );
}

export default Landing_Card;
