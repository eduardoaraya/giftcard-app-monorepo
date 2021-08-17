import styled from "styled-components";

export const MyCardPage = styled.div`
  width: 100%;
  height: 100%;
  padding: 45px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.fontColor};
`;

export const CardGrid = styled.div`
  max-width: 1024px;
  width: 100%;
  display: grid;
  grid-template-areas:
    "header header"
    "profile profile"
    "transaction transaction";
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 50px minmax(200px, 300px) auto;
  gap: 20px;
  background: #fff;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const CardHeader = styled.div`
  grid-area: header;
  padding: 10px;
  h1 {
    text-transform: uppercase;
    font-size: 1.2em;
    font-weight: bolder;
    color: ${({ theme }) => theme.secundary};
  }
`;

export const CardProfile = styled.div`
  grid-area: profile;
  padding: 10px;
  display: flex;
  flex-direction: row;
  .card-image {
    height: 200px;
    background: url("./giftcard.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 20px;
    flex: 1;
  }

  .card-info {
    flex: 1;
    padding: 20px 5px;
    &.card-number {
      span {
        font-size: 0.89em;
        font-weight: bolder;
        line-height: 26px;
        display: block;
        &.label {
          color: ${({ theme }) => theme.secundary};
        }
        span {
          font-weight: normal;
          color: ${({ theme }) => theme.dark};
        }
      }
    }
    &.list {
      ul li {
        font-weight: bolder;
        padding: 10px;
        margin: 2px 0px;
        box-shadow: ${({ theme }) => theme.shadow};
        border-radius: ${({ theme }) => theme.borderRadius};
        background: ${({ theme }) => theme.primary};
        p {
          margin: 5px 0;
          font-size: 0.88em;
          color: ${({ theme }) => theme.hightLight};
          &.label {
            font-size: 0.98em;
            font-weight: bold;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
`;

export const CardTransactions = styled.div`
  grid-area: transaction;
  padding: 10px;

  table {
    width: 100%;
    th {
    }
    tr,
    td,
    th {
      text-align: center;
      padding: 5px;
      border-bottom: solid 1px ${({ theme }) => theme.primary};
    }
    tbody {
      tr {
        cursor: pointer;
        z-index: 3;

        &:nth-child(even) {
          background: ${({ theme }) => theme.hightLight};
        }
      }
    }
  }
`;
