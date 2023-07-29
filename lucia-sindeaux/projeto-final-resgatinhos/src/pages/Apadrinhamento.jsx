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
        subtitle="Na Resgatinhos, temos muitos gatinhos adoráveis que precisam de ajuda e carinho. Ao se tornar madrinha ou padrinho, você estará dando a eles uma chance de ter uma vida melhor e ajudando a ONG a resgatar mais animais de rua. Escolha sua fofura favorita entre os gatinhos abaixo e torne-se um padrinho ou madrinha. Sua generosidade fará toda a diferença na vida desses peludinhos!"
        />
      </div>  
      <div className={styles.headerContent}>
      <p className={styles.headerSteps}><b>Passo 1:</b> Alguns gatinhos da ONG podem ser apadrinhados, ou seja, terem madrinhas e padrinhos que os sustentem, arquem com sua ração, areia, remédios, vacinas anuais e eventuais tratamentos. Você pode escolher um ou mais deles no final dessa página!
      </p>
      <p className={styles.headerSteps}><b>Passo 2:</b> Não temos valor mínimo para apadrinhamento, deixe o seu coração decidir. E você pode apadrinhar quantos gatinhos quiser, basta nos informar, ok?
      </p>  
      <p className={styles.headerSteps}><b>Passo 3:</b> Envie um e-mail para contato@resgatinhos.com.br se você deseje se tornar madrinha ou padrinho de um ou mais gatinhos. Entaremos em contato com você ao recebermos as suas respostas.
      </p>
      </div>
        <div className={styles.cardsContainer}>
          {dataFromApi.map((repo) => (
            <div className={styles.card} key={repo.id}>
              <img className={styles.cats} src={repo.url} alt="Gatos fofinhos" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Apadrinhamento;

