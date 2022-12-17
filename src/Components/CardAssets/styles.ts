import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const CardAssetsContainer = styled.div`
  width: 200px;
  min-height: 87px;
  background: ${(props) => props.theme["default-background"]};
  border-radius: 10px;
  border: none;
  margin: 0 0.625rem;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 0.5rem;

  :hover {
    filter: brightness(0.8);
    transition: 0.5s;
  }

  button {
    width: 20px;
    height: 20px;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;

export const ButtonContainer = styled(RadioGroup.Root)`
  position: absolute;
  left: 175px;
  top: 5px;
`;
export const Button = styled(RadioGroup.Item)``;

export const ContentData = styled.div`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme["blue-500"]};
  text-align: left;
`;

export const Attribute = styled.span`
  font-weight: bold;
  font-size: 0.875rem;
`;

export const Name = styled.div`
  font-size: 0.875rem;
`;
