import styled from "styled-components";

export const UnitsContainer = styled.div`
  width: 90%;
  height: 69px;
  background: ${(props) => props.theme["blue-500"]};
  border-radius: 0.625rem;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  box-shadow: 0px 22px 5px -10px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;

export const ButtonsContainer = styled.div`
  min-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
