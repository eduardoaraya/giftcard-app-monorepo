import React from "react";
import Mask from "../components/Mask";
import { Button } from "../shared/styeld-form";
import { LoginPage, LoginForm, Logo } from "./style";

const Login = () => {
  return (
    <LoginPage>
      <LoginForm>
        <Logo src="./logo.png" />
        <Mask
          className="login-input"
          type="text"
          name="card_number"
          placeholder="Número do cartão"
        />
        <Mask
          className="login-input"
          type="text"
          name="card_number"
          placeholder="Senha"
        />
        <Button className="submit-button">Entrar</Button>
      </LoginForm>
    </LoginPage>
  );
};

export default Login;
