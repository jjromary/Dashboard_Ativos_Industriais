import styled from "styled-components";

export const CardAssetsContainer = styled.button`
  width: 200px;
  min-height: 87px;
  background: ${(props) => props.theme["default-background"]};
  border-radius: 10px;
  border: none;
  margin: 0 0.625rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-left: 1.25rem;

  :hover {
    filter: brightness(0.8);
    transition: 0.5s;
  }
`;

export const ContentData = styled.div`
  color: ${(props) => props.theme["blue-500"]};
  text-align: left;
`;

export const Attribute = styled.span`
  font-weight: bold;
`;

export const Name = styled.span``;
