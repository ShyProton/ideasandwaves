import styled from "styled-components"
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px #00000055;
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 25px;
`

export const NavHeader = styled.img`
  height: clamp(40%, 7vw, 60%);
  cursor: pointer;
`

export const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  
  @media screen and (max-width: 900px) {
    display: block;
  }
`

export const MenuIcon = () => {
  return(
    <>
      <MenuBar/>
      <MenuBar/>
      <MenuBar/>
    </>
  )
}

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  
  @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: auto;
    margin: 0;
    left: 0;
    padding: 0;
    background: lightblue;
    box-shadow: 0 1px 4px #00000066;
    width: 100%;
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? '80px' : '-1000px')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transition: 0.5s ease-in-out;
    z-index: 999;
  }
`

export const MenuItemContainer = styled.div`
  height: 80px;
  transition: 0.2s ease-in-out;
  margin: 1rem 0;
`

export const MenuItem = styled(Link)`
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  text-decoration: none;
  height: 100%;
  transition: color 0.2s ease-in-out;
  
  &:hover {
    transition: color 0.2s ease-in-out;
    color: #35BAED;
  }
  
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

const MenuBar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
  background: black;
`
