import BlurText from "../BlurText";

type TitleProps = {
  title: string;
};

export const Title = (props: TitleProps) => {
  return (
    <BlurText
      text={props.title}
      delay={150}
      animateBy="words"
      direction="top"
      className="text-8xl mb-8 text-center justify-center"
    />
  );
};
