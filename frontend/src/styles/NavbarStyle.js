import styled from "styled-components"

export const NavWrapper = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: ${props => (props.active ? "100%" : "10%")};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 10px;
  background: ${props => (props.active ? "rgba(0, 0, 0, 0.8)" : "none")};
  @media (min-width: 668px) {
    position: sticky;
    background: #2d2a2a;
  }
`
export const BurgerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props =>
    props.active ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.6)"};
  width: 46px;
  height: 42px;
  &:focus {
    outline-color: #ff9900;
    outline-offset: 3px;
  }
  @media (min-width: 668px) {
    display: none;
  }
`
export const NavLinks = styled.nav`
  display: ${props => (props.active ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 99%;
  height: 80%;
  padding-top: 50px;
  @media (min-width: 668px) {
    background: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 0;
  }
`
export const NavButton = styled.button`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 26px;
  font-weight: 700;
  color: #fff;
  height: 40px;
  border: none;
  background: transparent;
  transition: 0.6s;
  cursor: pointer;
  &:focus {
    outline-color: #ff9900;
    outline-offset: 3px;
  }
  &:hover {
    color: #ff9900;
  }
  @media (min-width: 668px) {
    font-size: 14px;
    font-weight: 400;
  }
  @media (min-width: 992px) {
    font-size: 18px;
  }
`
