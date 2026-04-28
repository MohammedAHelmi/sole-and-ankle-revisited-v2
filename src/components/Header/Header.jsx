import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileIcons>
          <IconButton><Icon id={'shopping-bag'} /></IconButton>
          <IconButton><Icon id={'search'} /></IconButton>
          <IconButton onClick={() => setShowMobileMenu(true)}><Icon id={'menu'} /></IconButton>
        </MobileIcons>
      </MainHeader>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  @media(max-width: ${({theme}) => theme.widthBreakpoints.tablet}){
    justify-content: space-between;
    align-items: center;
    padding: 24px 16px 20px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
  @media(max-width: ${({theme}) => theme.widthBreakpoints.tablet}){
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const IconButton = styled.button`
  all: unset;
`;

const MobileIcons = styled.div`
  display: none;
  @media(max-width: ${({theme}) => theme.widthBreakpoints.tablet}){
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

export default Header;
