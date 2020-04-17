import React, { useState, useEffect } from "react";
import CaseBox from "../../components/CaseBox";
import api from "../../services/api";

import "./styles.css";
import Header from "../../components/Header";
export default function Home() {
  const [cases, setCases] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    getCases();
  }, []);

  async function getCases() {
    try {
      const response = await api.get("data", {
        params: { is_last: true, state: "CE" },
      });
      const { results } = response.data;
      const totalCases = results.reduce((acc, curr) => {
        return acc + curr.confirmed;
      }, 0);
      setTotal(totalCases);

      console.log(results[32]);
      setCases(results);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <>
      <Header totalCases={total} />
      <div className="container">
        {cases.map((dataCase) => (
          <CaseBox key={dataCase.city} data={dataCase} />
        ))}
      </div>
    </>
  );
}
