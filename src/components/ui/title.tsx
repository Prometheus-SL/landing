import BlurText from "../BlurText";

type TitleProps = {
  title: string;
  delay?: number;
  className?: string;
};

export const Title = (props: TitleProps) => {
  return (
    <BlurText
      text={props.title}
      delay={props.delay}
      animateBy="letters"
      direction="top"
      className={props.className}
    />
  );
};
