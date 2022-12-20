import styled from "styled-components";

export const UsersContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserContent = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme["blue-700"]};
      font-size: 0.875rem;
      line-height: 1.6rem;
    }

    td {
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6rem;
    }
  }
`;
