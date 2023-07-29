import Header from "../components/Header";
import { Cat, PawPrint, Fingerprint } from "phosphor-react";

import styles from "../styles/pages/home.module.css";

const Home = () => {
  return (
    <>
      <Header
        title="Conheça a Resgatinhos"
        subtitle="Sonhamos com um mundo onde todos os animais, especialmente gatos, sejam tratados com compaixão e respeito. Queremos ver uma realidade onde nenhum animal sofra ou seja abandonado, onde cada um deles tenha a oportunidade de encontrar um lar amoroso e seguro. Nossa visão é de um futuro melhor para essas criaturas adoráveis, onde a proteção animal seja uma prioridade e a adoção responsável seja a norma.
A construção desse futuro depende de cada um de nós. Nossa ONG recebe de braços abertos novos voluntários que desejem contribuir para essa nobre causa. Com a sua colaboração, podemos resgatar mais vidas, oferecer cuidados essenciais e encontrar lares para esses animais tão especiais.
Descubra como fazer parte dessa missão de resgatar vidas e construir futuros navegando em nosso site. Contamos com você nessa jornada de amor e dedicação aos animais."
      />
      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <Cat size={150} color="#f6ac71" weight="thin" />
          <h2 className={styles.cardTitle}>MISSÃO</h2>
          <p className={styles.cardDescription}>
            Resgatar, proteger e promover o bem-estar de animais em situação de
            vulnerabilidade, proporcionando-lhes cuidados adequados, abrigo
            seguro e a oportunidade de encontrar um lar feliz.
          </p>
        </div>
        <div className={styles.cardContainer}>
          <Fingerprint size={150} color="#f6ac71" weight="thin" />
          <h2 className={styles.cardTitle}>VALORES</h2>
          <p className={styles.cardDescription}>
            Somos comprometidos com a causa animal, dedicando nossos esforços
            para garantir seu bem-estar e proteção.
          </p>
        </div>
        <div className={styles.cardContainer}>
          <PawPrint size={150} color="#f6ac71" weight="thin" />
          <h2 className={styles.cardTitle}>VISÃO</h2>
          <p className={styles.cardDescription}>
            Construir um mundo em que todos os animais, especialmente gatos,
            sejam tratados com compaixão e respeito, em que não existam animais
            abandonados ou sofrendo.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
