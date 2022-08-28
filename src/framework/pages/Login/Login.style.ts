import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  div: first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
  }
`;

export const LeftSide = styled.div`
  width: 473px;
`;
export const RightSide = styled.div`
  background-color: #B8DFFD;
  background-position: bottom right;
  background-repeat: no-repeat;
  background-image: url('/backgroundRight.svg'), url('/wave.svg');
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100vw - 473px);
  padding: 32px;

  
  div {
    background: rgba(255, 255, 255, 0.24);
    border: 1px solid #FBFBFB;
    box-shadow: -70px -56px 104px rgba(255, 255, 255, 0.25), 40px 79px 116px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(14px);
    border-radius: 20px;
    width: 473px;
    height: 528px;
    img {
      width: 409px;
      height: 464px;
    }
  }
`;

export const CustomLabel = styled.div`
  color: purple;
  font-size: 22px;
  text-align: center;
`;
