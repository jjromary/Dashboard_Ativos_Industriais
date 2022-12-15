import styled from "styled-components";

export const ButtonContainer = styled.button`
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
