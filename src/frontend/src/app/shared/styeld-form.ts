import styled from "styled-components";
import { ThemeProps } from "./environiments";

export const Input = styled.input<ThemeProps>`
  width: 100%;
  height: 45px;
  padding: 4px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.primary};
  outline: none;
  margin: 4px 0px;
`;

export const Button = styled.button<ThemeProps>`
  width: 100%;
  height: auto;
  padding: 10px 20px;
  border: none;
  background: ${({ theme }) => theme.secundary};
  outline: none;
  color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-transform: uppercase;
  box-shadow: ${({ theme }) => theme.shadow};
  cursor: pointer;
  font-weight: bolder;
  transition: 0.2s;
  &:hover {
    background: #fff;
    color: ${({ theme }) => theme.secundary};
  }
`;
