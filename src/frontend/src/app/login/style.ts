import styled from "styled-components";
import { ThemeProps } from "../shared/environiments";

export const LoginPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.form<ThemeProps>`
  margin-top: 55px;
  width: 340px;
  height: auto;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 45px 35px;
  border-radius: ${({ theme }) => theme.borderRadius};

  .submit-button {
    margin-top: 45px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  margin: 25px 0px;
`;
