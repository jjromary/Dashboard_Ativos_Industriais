import { ReactNode } from "react";
import { CardDashboardContainer, Title } from "./styles";

interface CardDashboardProps {
  width: string;
  height: string;
  title: string | undefined | null;
  fontSize: string;
  children: ReactNode;
}

export default function CardDashboard({ height, width, title, children, fontSize }: CardDashboardProps) {
  return (
    <CardDashboardContainer width={width} height={height}>
      <Title fontSize={fontSize}>{title}</Title>
      {children}
    </CardDashboardContainer>
  )
}