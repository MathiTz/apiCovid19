import React from "react";

import "./styles.css";

export default function Header({ totalCases }) {
  return (
    <header className="header">
      <div className="header__title">Covid 19</div>
      <div className="header__total-case">Total de casos confirmados: {totalCases}</div>
    </header>
  );
}
