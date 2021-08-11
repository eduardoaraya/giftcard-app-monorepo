import styled from "styled-components";

const headerHeight = "80px";

export const Header = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9;
  height: ${headerHeight};
  background: ${({ theme }) => theme.hightLight};
`;

export const LayoutWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: ${headerHeight};
`;

export const PageWrapper = styled.div`
  width: 100%;
  position: relative;
  min-height: calc(100vh - ${headerHeight});
`;

export const Footer = styled.footer`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.hightLight};
`;
