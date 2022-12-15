import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  gap: 0 1.875rem;
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

export const LeftContent = styled.div`
  max-width: 500px;
  height: 750px;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid red;

  :first-child {
    margin-bottom: 1.5rem;
  }
`;

export const ContentInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.5rem;

  :first-child {
    margin-top: 1rem;
  }

  p {
    font-weight: 700;
    span {
      font-weight: 400;
      text-align: center;
    }
  }
`;

export const MidleContent = styled.div`
  width: 345px;
  height: 750px;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid red;
`;
export const RightContent = styled.div`
  width: 445px;
  height: 750px;
  background: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid red;
`;

export const TopContent = styled.div`
  display: flex;
  width: 345px;
  flex-direction: row;
  justify-content: space-between;
`;

export const BottomContent = styled.div``;

export const Value = styled.span`
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
  margin-top: 55px;
`;
