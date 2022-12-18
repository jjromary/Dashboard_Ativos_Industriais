import styled from "styled-components";

export const UnitsContainer = styled.div`
  width: 100%;
  height: 69px;
  background: ${(props) => props.theme["card-dashboard-background"]};
  border-radius: 0.625rem;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-shadow: 0px 22px 5px -10px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme["blue-700"]};
`;

export const UnitsContent = styled.div`
  min-width: 500px;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Unit = styled.div`
  border: none;
  width: 240px;
  height: 50px;
  border-radius: 50px;
  background: ${(props) => props.theme["default-background"]};
  color: ${(props) => props.theme["blue-500"]};
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  user-select: none;
`;
export const Button = styled.button`
  border: none;
  width: 140px;
  height: 50px;
  border-radius: 50px;
  background: ${(props) => props.theme["blue-700"]};
  color: ${(props) => props.theme["white"]};
  font-size: 1.5rem;
  margin-left: 3rem;
  cursor: pointer;

  &:not(:disabled):hover {
    filter: brightness(0.8);
    transition: 0.5s;
  }

  :disabled {
    opacity: 0.7;
  }
`;

export const FormContainer = styled.form``;
export const InputSearchUnit = styled.input`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme["default-background"]};
  height: 50px;
  width: 300px;
  border-radius: 10px;
  padding-left: 1rem;
`;
