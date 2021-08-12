import React from "react";
import Mask from "../components/mask";
import { Button, FormControll, Input, Lable } from "../shared/styeld-form";
import { LoginPage, LoginForm, Logo } from "./style";
import { Link } from "react-router-dom";
const Login = () => {
  const submitCredentials = (event: React.FormEvent) => {
    event.preventDefault();
    document.location.href = "./mycard";
  };

  return (
    <LoginPage>
      <LoginForm method="get" action="/mycard" onSubmit={submitCredentials}>
        <Logo src="./logo.png" />
        <FormControll>
          <Lable>Número do cartão</Lable>
          <Mask
            className="login-input"
            type="text"
            name="card_number"
            patern="onlyNumber"
            required
            placeholder="Número do cartão"
          />
        </FormControll>
        <FormControll>
          <Lable>Senha</Lable>
          <Input
            className="login-input"
            type="password"
            name="password"
            required
            placeholder="Senha"
          />
        </FormControll>
        <FormControll>
          <Button className="submit-button">Entrar</Button>
        </FormControll>
      </LoginForm>
    </LoginPage>
  );
};

export default Login;
