import React from "react";
import { Button, Input } from "../shared/styeld-form";
import { LoginPage, LoginForm, Logo } from "./style";
const Login = () => {
  return (
    <LoginPage>
      <LoginForm>
        <Logo src="./logo.png" />
        <Input type="text" name="card_number" placeholder="Número do cartão" />
        <Input type="text" name="card_number" placeholder="Senha" />
        <Button className="submit-button">Entrar</Button>
      </LoginForm>
    </LoginPage>
  );
};

export default Login;
