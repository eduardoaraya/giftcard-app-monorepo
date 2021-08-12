import React from "react";
import { Footer, Header, LayoutWrapper, PageWrapper } from "./style";

const Layout: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <Header></Header>
      <LayoutWrapper>
        <PageWrapper>{children}</PageWrapper>
      </LayoutWrapper>
      <Footer></Footer>
    </>
  );
};

export default Layout;
