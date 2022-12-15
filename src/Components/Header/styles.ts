import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80px;
  border-radius: 0px 0px 146px 146.5px;
  background: ${(props) => props.theme["blue-700"]};
  color: white;
  font-weight: bold;
`;
