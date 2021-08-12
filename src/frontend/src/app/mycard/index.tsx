import React from "react";
import {
  MyCardPage,
  CardHeader,
  CardTransactions,
  CardProfile,
  CardGrid,
} from "./style";

const MyCard = () => {
  return (
    <MyCardPage>
      <CardGrid>
        <CardHeader>
          <h1>Meu gift Card</h1>
        </CardHeader>
        <CardProfile>
          <div className="card-image"></div>
          <div className="card-info card-number">
            <span>Informações:</span>
            <span>Número do cartão: 45655555555555555555555555</span>
          </div>
          <div className="card-info list">
            <ul>
              <li>
                <p>Mensagem do Presente</p>
                <p>Feliz aniversaio</p>
              </li>
              <li>
                <p>Saldo</p>
                <p>R$ 100,00</p>
              </li>
              <li>
                <p>Validade</p>
                <p>Até 05/02/2026</p>
              </li>
            </ul>
          </div>
        </CardProfile>
        <CardTransactions>
          <table cellSpacing="0">
            <thead>
              <tr>
                <th>Tipo de Transação</th>
                <th>Data da Transação</th>
                <th>Valor</th>
                <th>Identificação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Resgate</td>
                <td>02/05/2021</td>
                <td>R$ 4555,35</td>
                <td>
                  <span className="ecommerce">E-Commerce</span>
                </td>
              </tr>
              <tr>
                <td>Resgate</td>
                <td>02/05/2021</td>
                <td>R$ 4555,35</td>
                <td>
                  <span className="ecommerce">E-Commerce</span>
                </td>
              </tr>
              <tr>
                <td>Resgate</td>
                <td>02/05/2021</td>
                <td>R$ 4555,35</td>
                <td>
                  <span className="ecommerce">E-Commerce</span>
                </td>
              </tr>
            </tbody>
          </table>
        </CardTransactions>
      </CardGrid>
    </MyCardPage>
  );
};

export default MyCard;
