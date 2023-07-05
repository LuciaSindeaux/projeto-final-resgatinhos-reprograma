import Header from "../components/Header";
import portfolio from "../assets/portfolio.svg";

import React, { useEffect, useState } from "react";
import Axios from "axios";
import { GoPaperAirplane } from "react-icons/go";

import styles from "../styles/pages/portfolio.module.css";

const Portfolio = () => {
  const [dataFromApi, setDataFromApi] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await Axios.get(
          "https://api.github.com/users/LuciaSindeaux/repos"
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
      <Header title="Conheça meus projetos no github" image={portfolio} />
      <div className={styles.portfolioContainer}>
        <div className={styles.cardsContainer}>
          {dataFromApi.map((repo) => (
            <>
              <div className={styles.card} key={repo.id}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <a href={repo.html_url} target="_blank">
                  
                  <GoPaperAirplane size={18} color="#609dcf" />
                </a>
                </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
