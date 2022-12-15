import { ButtonContainer } from "./styles";

interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return (
    <ButtonContainer >
      {title}
    </ButtonContainer>
  )
}