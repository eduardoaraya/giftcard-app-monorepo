import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loading from "../components/loading";
import Auth from "../services/auth";
import { Button, FormControll, Input, Lable } from "../shared/styeld-form";
import { LoginPage, LoginForm } from "./style";

const Login: React.FC = (): JSX.Element => {
  const cardNumber = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const history = useHistory();

  useEffect(() => {
    return () => {
      setErrors([]);
      setLoading(false);
    };
  }, []);

  const submitCredentials = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const _cardNumber = cardNumber?.current?.value,
      _password = password?.current?.value;

    if (_cardNumber?.length !== 16) {
      setLoading(false);
      return setErrors(["O Número do cartão deve conter 16 caracteres"]);
    }

    if (_password?.length !== 6) {
      setLoading(false);
      return setErrors(["Senha inválida"]);
    }

    try {
      await Auth({ card_number: _cardNumber, password: _password });
      history.push("/mycard");
    } catch (err) {
      setErrors(["Dados inválidos!"]);
    } finally {
      setLoading(false);
    }
  };

  const applyMask = (event) => {
    event.target.value = event.target.value.replace(/\D/g, "");
  };

  return (
    <LoginPage>
      <Loading show={loading}></Loading>
      <LoginForm method="get" action="/mycard" onSubmit={submitCredentials}>
        <Logo src="./logo.png" />
        <FormControll>
          <Lable>Número do cartão</Lable>
          <Input
            className="login-input"
            type="text"
            name="card_number"
            required
            onChange={applyMask}
            ref={cardNumber}
          />
        </FormControll>
        <FormControll>
          <Lable>Senha</Lable>
          <Input
            className="login-input"
            type="password"
            name="password"
            required
            ref={password}
          />
        </FormControll>
        <div className="alert-list">
          {errors.map((item, i) => (
            <div key={i} className="alert-danger">
              <p>{item}</p>
            </div>
          ))}
        </div>
        <FormControll>
          <Button className="submit-button">Entrar</Button>
        </FormControll>
      </LoginForm>
    </LoginPage>
  );
};

export default Login;
