import React, { useState, useEffect } from "react";
import "./App.css";

import api from "./services/api";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getDataApi() {
      try {
        const result = await api.get(
          "https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=CE"
        );

        setData(result.data.results);
      } catch (e) {
        alert(e.response.message);
      }
    }

    getDataApi();
  }, []);

  return (
    <div className='App'>
      <div className='box-container'>
        {data &&
          data.map((d) => (
            <div key={d.city_ibge_code} className='box'>
              <p>
                Cidade: <span>{d.city}</span>
              </p>
              <p>Confirmados: {d.confirmed}</p>
              <p>Mortes: {d.deaths}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
