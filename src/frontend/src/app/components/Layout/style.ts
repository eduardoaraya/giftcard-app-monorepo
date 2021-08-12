import styled from "styled-components";

const headerHeight = 80;
const footerHeight = 50;

export const Header = styled.div`
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  position: fixed;
  height: ${headerHeight}px;
  background: ${({ theme }) => theme.primary};
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: ${headerHeight}px;
  display: flex;
`;

export const PageWrapper = styled.div`
  width: 100%;
  position: relative;
  min-height: calc(100vh - ${headerHeight + footerHeight}px);
`;

export const Footer = styled.footer`
  position: relative;
  width: 100%;
  height: ${footerHeight}px;
  background: ${({ theme }) => theme.primary};
  box-shadow: ${({ theme }) => theme.shadow};
`;
