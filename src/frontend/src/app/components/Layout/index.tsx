import React from "react";
import { Footer, Header, LayoutWrapper, PageWrapper } from "./style";

const Layout: React.FC = ({ children }): JSX.Element => {
  return (
    <LayoutWrapper>
      <Header></Header>
      <PageWrapper>{children}</PageWrapper>
      <Footer></Footer>
    </LayoutWrapper>
  );
};

export default Layout;
