import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loading from "../components/loading";
import Paginate from "../components/paginage";
import cardInfoService, { CardInfoResonse } from "../services/card-info";
import cardTransactions from "../services/transactions";

import {
  MyCardPage,
  CardHeader,
  CardTransactions,
  CardProfile,
  CardGrid,
} from "./style";

const MyCard = () => {
  const [cardInfo, setCardInfo] = useState<CardInfoResonse>({
    card_number: "",
    expirate_at: "",
    messages: [],
    name: "",
    status: "",
    updated_at: "",
    value: "",
  });

  const [pagination, setPagination] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const getCardInfo = async () => {
    try {
      const data = await cardInfoService();
      setCardInfo(data);
    } catch (err) {}
  };

  const getTransactions = async (url: string | null) => {
    setLoading(true);
    try {
      const data = await cardTransactions(url);
      setPagination(data.links);
      setTransactions(Object.values(data.data));
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const loadInfo = () => {
    getCardInfo();
    getTransactions("?page=1");
  };

  useEffect(() => {
    loadInfo();
    return () => {
      setPagination([]);
      setTransactions([]);
    };
  }, []);

  const nextPage = (url) => {
    getTransactions(url);
  };

  const getPrice = (value: string): string => {
    if (!value) return "Aguarde...";
    return (parseInt(value) / 100).toFixed(2).replace(".", ",");
  };

  const getDate = (value: string) => {
    if (!value) return "Aguarde...";
    const date = new Date(value);
    return `${date.getDay()}/${
      date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
    }/${date.getFullYear()}`;
  };

  const getLastMessage = (messages: Array<any>): string => {
    const lastMessage = messages.pop();
    return lastMessage?.message ?? "Não há nenhuma mensagem";
  };

  return (
    <MyCardPage>
      <Loading show={loading} />
      <CardGrid>
        <CardHeader>
          <h1>Meu gift Card</h1>
        </CardHeader>
        <CardProfile>
          <div className="card-image"></div>
          <div className="card-info card-number">
            <span>Informações:</span>
            <span className="card-owner label">
              Nome do titular: <span>{cardInfo.name}</span>
            </span>
            <span className="card-number-value label">
              Número do cartão:
              <span>{cardInfo.card_number}</span>
            </span>
          </div>
          <div className="card-info list">
            <ul>
              <li>
                <p className="label">Mensagem do Presente</p>
                <p>{getLastMessage(Object.values(cardInfo.messages))}</p>
              </li>
              <li>
                <p className="label">Saldo</p>
                <p>{getPrice(cardInfo.value)}</p>
              </li>
              <li>
                <p className="label">Validade</p>
                <p>{getDate(cardInfo.expirate_at)}</p>
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
              {transactions.map((transaction: any, i) => {
                return (
                  <tr key={i}>
                    <td>{transaction.transaction_type}</td>
                    <td>{transaction.transaction_date}</td>
                    <td>R$ {transaction.transaction_value}</td>
                    <td>
                      <span className="ecommerce">
                        {transaction.store_identification}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Paginate nextPage={nextPage} pagination={pagination} />
        </CardTransactions>
      </CardGrid>
    </MyCardPage>
  );
};

export default MyCard;
