import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const LeftSide = styled.div`
  border: 1px solid red;
  flex-grow: 1;
`;
export const RightSide = styled.div`
  border: 1px solid blue;

  background-color: #b8dffd;
  flex-grow: 2;
`;
