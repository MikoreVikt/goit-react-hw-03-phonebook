import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const P = styled.p`
  display: flex;
  align-items: center;
  font-weight: 500;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  margin: 10px;
  padding: 5px;
  background-color: transparent;
  box-shadow: 0 0 4px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
