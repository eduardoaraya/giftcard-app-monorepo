import React, { useState } from "react";
import Mask from "../components/mask";
import Auth from "../services/auth";
import { Button, FormControll, Input, Lable } from "../shared/styeld-form";
import { LoginPage, LoginForm, Logo } from "./style";

const Login = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitCredentials = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await Auth({
      password,
      cardNumber,
    });
    console.log(response);
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
            onChange={(event: any) => setCardNumber(event?.target?.value)}
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
            onChange={(event: any) => setCardNumber(event?.target?.value)}
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
