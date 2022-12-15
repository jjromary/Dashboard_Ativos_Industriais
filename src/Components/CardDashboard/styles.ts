import styled from "styled-components";

interface CardDashboardContainerProps {
  width: string;
  height: string;
}

interface TitleProps {
  fontSize?: string;
}

export const CardDashboardContainer = styled.div<CardDashboardContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 10px;
  background: ${(props) => props.theme["card-dashboard-background"]};
  box-shadow: 0px 22px 5px -10px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.25rem;
`;

export const Title = styled.div<TitleProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  height: 50px;
  color: ${(props) => props.theme["blue-700"]};
  margin: 0.5rem 0;
  text-align: center;
  word-wrap: normal;
`;
