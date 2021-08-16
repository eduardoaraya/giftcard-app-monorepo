import styled from "styled-components";

export const MyCardPage = styled.div`
  width: 100%;
  height: 100%;
  padding: 45px;
  display: flex;
  justify-content: center;
`;

export const CardGrid = styled.div`
  max-width: 1024px;
  width: 100%;
  display: grid;
  grid-template-areas:
    "header header header"
    "profile transaction transaction"
    "profile transaction transaction";
  grid-template-columns: 2fr 4fr;
  grid-template-rows: 50px 100%;
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
  }
`;

export const CardProfile = styled.div`
  grid-area: profile;
  padding: 10px;
  .card-image {
    height: 200px;
    background: #ddd;
    margin-bottom: 20px;
  }

  .card-info {
    padding: 20px 5px;
    &.card-number {
      span {
        font-weight: bolder;
        line-height: 26px;
        display: block;
      }
    }
    &.list {
      ul li {
        font-weight: bolder;
        padding: 10px;
        background: #ddd;
        margin: 2px 0px;
      }
    }
  }
`;

export const CardTransactions = styled.div`
  grid-area: transaction;
  padding: 10px;

  table {
    width: 100%;

    tr,
    td,
    th {
      text-align: center;
      padding: 5px;
    }
    tbody {
      tr {
        cursor: pointer;
        z-index: 3;
        &:hover {
          box-shadow: ${({ theme }) => theme.shadow};
        }
        &:nth-child(even) {
          background: ${({ theme }) => theme.hightLight};
        }
      }
    }
  }
`;
