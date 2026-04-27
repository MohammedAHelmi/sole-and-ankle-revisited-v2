import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;
  @media(max-width: ${({theme}) => theme.widthBreakpoints.tablet}){
    padding-inline: 16px 12px;
  }
`;

export default App;
