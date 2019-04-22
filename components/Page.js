import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Nav from "./Nav";

const Page = props => {
  return (
    <div className={props.className}>
      <Nav user={props.data.user} />
      <Main>{props.children}</Main>
      <GlobalStyles />
    </div>
  );
};

const GlobalStyles = createGlobalStyle`
html body{
    padding:0;
    margin:0;
    box-sizing: border-box;
    overflow-x:hidden;
    background: #f9f9f9;
    *{
      box-sizing:inherit;
    }
  }

`;

const Main = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export default styled(Page)`
  padding: 0;
  margin: 0;
`;
