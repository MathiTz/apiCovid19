import React from "react";

import "./styles.css";
export default function CaseBox({ data }) {
  return (
    <div className="case-box">
      <div className="box-header">
        <p className="header-city">{`${data.city}/${data.state}`}</p>
      </div>
      <p>{Math.round(data.estimated_population_2019 / 1000)}k hab.</p>
      <p>Casos: {data.confirmed}</p>
      <p>Mortes: {data.deaths}</p>
    </div>
  );
}
