import styled from "styled-components";

export const UnitsContainer = styled.div`
  width: 100%;
  height: 69px;
  background: ${(props) => props.theme["blue-500"]};
  border-radius: 0.625rem;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0 1rem;
  box-shadow: 0px 22px 5px -10px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;

export const ButtonsContainer = styled.div`
  min-width: 500px;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  border: none;
  width: 240px;
  height: 50px;
  border-radius: 50px;
  background: ${(props) => props.theme["default-background"]};
  color: ${(props) => props.theme["blue-500"]};
  font-size: 1.5rem;

  :hover {
    filter: brightness(0.8);
    transition: 0.5s;
  }
`;
