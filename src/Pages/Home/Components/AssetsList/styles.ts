import styled from "styled-components";

export const AssetsContainer = styled.div`
  width: 230px;
  max-height: 750px;
  border-radius: 10px;
  background: ${(props) => props.theme["blue-700"]};
  box-shadow: 0px 22px 5px -10px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme["white"]};
  margin-top: 1rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    background-clip: content-box;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
`;
