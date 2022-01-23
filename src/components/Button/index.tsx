import * as S from "./button.style";

interface ButtonsProps {
  text: string;
}

export const Button = (props: ButtonsProps) => {
  return <S.Button>{props.text}</S.Button>;
};
