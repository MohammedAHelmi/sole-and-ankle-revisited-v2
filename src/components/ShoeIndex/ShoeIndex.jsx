import React from 'react';
import styled from 'styled-components';

import { WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Filter>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
              >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </Filter>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <SidebarWrapper>
          <Spacer size={42} />
          <ShoeSidebar />
        </SidebarWrapper>
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
  @media(max-width: ${({theme}) => theme.widthBreakpoints.tablet}){
    flex-direction: column-reverse;
    align-items: start;
    gap: 8px;
  }
`;

const SidebarWrapper = styled.div`
  @media(max-width: ${({theme}) => theme.widthBreakpoints.tablet}){
    display: none;
  }
`

const Filter = styled.div`
  @media(max-width: ${({theme}) => theme.widthBreakpoints.phone}){
    display: none;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
  @media(max-width: ${({theme}) => theme.widthBreakpoints.tablet}){
    flex-basis: 16px;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
