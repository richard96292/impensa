import styled from "styled-components";
import Categories from "../NewExpense/Categories";
import theme from "../../theme/Index";
import { useTransition } from "react-spring";
export const Icon = styled.i`
  padding: 6px;
  border-radius: 8px;
  margin-left: auto;
  cursor: pointer;
  transition: color 1s;
  color: white;
  :hover {
    background: rgba(197, 199, 197, 0.3);
  }
  :active {
    background: rgba(197, 199, 197, 0.7);
  }
`;
export const Dropout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(1, 1, 1, 0.6);
`;

export const HeaderWrapper = styled.div`
  background: ${theme.bg.semiBlue};
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  max-width: 100%;
  padding: 10px 10px 10px 20px;
  display: flex;
  align-items: center;
`;

const Heading = styled.h3`
  color: white;
  margin: 0;
  font-size: 1.2em;
`;

export const ModalWrapper = styled.nav`
  background: white;
  z-index: 1133;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
  width: 350px;
  height: fit-content;
  position: fixed;
  margin: auto;
`;

export default function TestModal(props) {
  return (
    <>
      <Dropout onClick={props.close} />
      <ModalWrapper>
        <HeaderWrapper>
          <Heading>{props.a}</Heading>
          <Icon onClick={props.close} className="fas fa-times fa-xl" />
        </HeaderWrapper>
        <Categories />
      </ModalWrapper>
    </>
  );
}