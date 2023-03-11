import styled from "styled-components";
import { Link, Outlet } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import React from "react";

function NavBar () {
  return (
    <HeaderWrapper>
      <Container>
        <Link to={'/'}>
          <Logo>WebStore</Logo>
        </Link>
        <Navbar>
          <NavbarLink to={'/'}>Home</NavbarLink>
          <NavbarLink to={'/shop'}>Products</NavbarLink>
          <ButtonContainer>
            <FaShoppingCart />
          </ButtonContainer>
        </Navbar>
      </Container>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.dark};
`

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
  }
`

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 6rem;
`

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7rem;
  font-size: 2.4rem;

  @media (max-width: 480px) {
    gap: 0;
    width: 100%;
  }
`

const NavbarLink = styled(Link)`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.light};
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

const ButtonContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.02);
  }
`


export default NavBar;