import styled from "styled-components";
import { ThemeProps } from "./environiments";

export const Input = styled.input<ThemeProps>`
  width: 100%;
  height: 45px;
  padding: 5px;
  border: none;
  outline: none;
  margin: 4px 0px;
  /* box-shadow: ${({ theme }) => theme.shadow}; */
  font-size: 16px;
  background: ${({ theme }) => theme.hightLight};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: solid 1px ${({ theme }) => theme.primary};
  &:focus {
    border: solid 1px ${({ theme }) => theme.secundary};
  }
`;

export const Button = styled.button<ThemeProps>`
  width: 100%;
  height: auto;
  padding: 10px 20px;
  border: none;
  background: ${({ theme }) => theme.primary};
  outline: none;
  color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-transform: uppercase;
  box-shadow: ${({ theme }) => theme.shadow};
  cursor: pointer;
  font-weight: bolder;
  transition: 0.2s;
  &:hover {
    background: ${({ theme }) => theme.secundary};
  }
`;

export const Lable = styled.label`
  font-weight: bold;
  color: ${({ theme }) => theme.fontColor};
  margin-bottom: 0.3em;
`;

export const FormControll = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
