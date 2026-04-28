import React from 'react';
import styled from 'styled-components';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { Root, Portal, Overlay, Content, Title, Description, Close } from "@radix-ui/react-dialog";
import { COLORS, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Root defaultOpen={isOpen} onOpenChange={(state) => state === false && onDismiss()} >
      <Portal>
        <Overlay>
          <Background />
        </Overlay>
				<Content>
          <VisuallyHidden>
            <Title></Title>
            <Description></Description>
          </VisuallyHidden>
          <Menu>
            <Close asChild>
              <Dismiss onClick={onDismiss}><Icon id={'close'} size={24} /></Dismiss>
            </Close>
            <Nav>
              <NavLink href="/sale">Sale</NavLink>
              <NavLink href="/new">New&nbsp;Releases</NavLink>
              <NavLink href="/men">Men</NavLink>
              <NavLink href="/women">Women</NavLink>
              <NavLink href="/kids">Kids</NavLink>
              <NavLink href="/collections">Collections</NavLink>
            </Nav>
            <Footer>
              <FooterLink href="/terms">Terms and Conditions</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </Footer>
          </Menu>
        </Content>
      </Portal>
    </Root>
  );
};

const Background = styled.div`
  background: ${COLORS.gray["700"]};
  opacity: 0.8;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Menu = styled.div`
  background-color: ${COLORS.white};
	position: absolute;
  width: 300px;
  display: flex;
  flex-direction: column;
	top: 0;
	right: 0;
	bottom: 0;
  padding-inline-start: 32px;
`;

const Dismiss = styled.button`
  all: unset;
  position: absolute;
  top: 26px;
  right: 16px;
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
`;

const NavLink = styled.a`
  font-size: ${18/16}rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-block-end: 32px;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: ${14/16}rem;
  color: ${COLORS.gray["700"]};
  font-weight: ${WEIGHTS.normal};
  text-decoration: none;
`

export default MobileMenu;
