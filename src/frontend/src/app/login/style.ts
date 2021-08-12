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
`;

export const LoginForm = styled.form<ThemeProps>`
  margin-top: -135px;
  width: 340px;
  height: auto;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 45px 35px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: #fff;

  .login-input {
    margin-top: 15px;
  }
  .submit-button {
    margin-top: 45px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  margin: 25px 0px;
`;
