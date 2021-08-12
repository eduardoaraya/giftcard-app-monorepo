import styled from "styled-components";
import { ThemeProps } from "../shared/environiments";

export const LoginPage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.hightLight};
  flex: 1;
  padding: 25px;
`;

export const LoginForm = styled.form<ThemeProps>`
  margin-top: -135px;
  max-width: 540px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 45px 35px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: #fff;

  .login-input {
    margin-top: 12px;
  }
  .submit-button {
    margin-top: 45px;
  }
`;

export const Logo = styled.img`
  width: 200px;
  margin: 25px auto;
`;
