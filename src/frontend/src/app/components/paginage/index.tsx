import React from "react";
import styled from "styled-components";

const PaginateWrapper = styled.div`
  padding: 20px 0;
  width: 100%;
  ul {
    display: flex;
    flex-direction: row;
    width: 100%;

    li {
      text-align: center;
      margin: 0 10px;
      font-weight: bold;
      cursor: pointer;
      &.active,
      &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.secundary};
      }
    }
  }
`;

const Paginate = ({ nextPage, pagination }) => {
  return (
    <PaginateWrapper>
      <ul>
        {pagination.map((item: any, i) => {
          if (item.label === "pagination.previous") {
            return (
              <li
                key={i}
                className={item.active ? "active" : undefined}
                onClick={() => nextPage(item.url)}
              >
                Prev
              </li>
            );
          }
          if (item.label === "pagination.next") {
            return (
              <li
                key={i}
                className={item.active ? "active" : undefined}
                onClick={() => nextPage(item.url)}
              >
                Next
              </li>
            );
          }
          return (
            <li
              key={i}
              className={item.active ? "active" : undefined}
              onClick={() => nextPage(item.url)}
            >
              {item.label}
            </li>
          );
        })}
      </ul>
    </PaginateWrapper>
  );
};

export default Paginate;
