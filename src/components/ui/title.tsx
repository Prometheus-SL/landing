import BlurText from "../BlurText";

type TitleProps = {
  title: string;
  className?: string;
};

export const Title = (props: TitleProps) => {
  return (
    <BlurText
      text={props.title}
      delay={150}
      animateBy="words"
      direction="top"
      className={props.className}
    />
  );
};
