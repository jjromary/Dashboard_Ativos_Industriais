import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100vh;
  background: ${(props) => props.theme["default-background"]};
  flex-direction: column;
`;
