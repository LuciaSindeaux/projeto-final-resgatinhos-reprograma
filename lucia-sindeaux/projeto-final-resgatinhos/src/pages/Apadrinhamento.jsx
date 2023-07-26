import Header from "../components/Header";

import React, { useEffect, useState } from "react";
import Axios from "axios";


import styles from "../styles/pages/apadrinhamento.module.css";

const Apadrinhamento = () => {
  const [dataFromApi, setDataFromApi] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await Axios.get(
          "https://api.thecatapi.com/v1/images/search?limit=10"
        );
        setDataFromApi(response.data);
      } catch (error) {
        console.error("Capturei um erro: " + error);
      }
    }

    getData();
  }, []);

  return (
    <>          
      <div className={styles.ApadrinhamentoContainer}>      
      <div className={styles.headerContainer}>
      <Header
        title="Apadrinhamento" 
        content="Há dezenas de gatinhos na resgatinhos com poucas ou nenhuma chance de adoção. Ao se tornar madrinha ou padrinho de um desses gatinhos, você ajudará a sustenta-los e permitirá que a ONG continue resgatando novos animais das ruas. Você pode escolher sua fofura escolhendo um dos gatinhos abaixo para apadrinhar"
      />
      </div>  
        <div className={styles.cardsContainer}>
          {dataFromApi.map((repo) => (
            <div className={styles.card} key={repo.id}>
              <img className={styles.cats} src={repo.url} alt="Cat" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Apadrinhamento;

