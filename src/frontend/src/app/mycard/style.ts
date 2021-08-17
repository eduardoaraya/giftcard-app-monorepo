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

  grid-template-rows: 50px minmax(200px, auto) auto;
  gap: 20px;
  background: ${({ theme }) => theme.hightLight};
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
  @media (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
  .card-image {
    height: 200px;
    background: url("./giftcard.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 20px;
    flex: 1;
    min-height: 200px;
  }

  .card-info {
    flex: 1;
    padding: 20px 5px;
    &.card-number {
      span {
        font-size: 1em;
        font-weight: bolder;
        line-height: 26px;
        display: block;
        &.label {
          color: ${({ theme }) => theme.secundary};
        }
        span {
          font-size: 0.89em;
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
  @media (max-width: 600px) {
    .table-wrapper {
      overflow-x: scroll;
    }
  }
  table {
    width: 100%;
    @media (max-width: 600px) {
      & {
        min-width: 600px;
      }
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
        height: 45px;
        &:nth-child(even) {
          background: ${({ theme }) => theme.hightLight};
        }
      }

      td {
        text-transform: capitalize;

        .flag {
          background: ${({ theme }) => theme.primary};
          padding: 5px 10px;
          border-radius: ${({ theme }) => theme.borderRadius};
          color: ${({ theme }) => theme.hightLight};
          /* box-shadow: ${({ theme }) => theme.shadow}; */
        }
      }
    }
  }
`;
