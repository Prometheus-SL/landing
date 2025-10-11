import { AnimatedTooltip } from "../shadcn-io/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Miguel Angel Perez Garcia",
    designation: "Software Engineer",
    image:
      "https://avatars.githubusercontent.com/u/61310771?v=4",
  },
  {
    id: 2,
    name: "Raul Hernandez Salcedo",
    designation: "Software Engineer",
    image:
      "https://avatars.githubusercontent.com/u/67696106?v=4",
  },
];

export const AnimatedIcon = () => {
    return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={people} />
    </div>
    )
};

export default AnimatedIcon;