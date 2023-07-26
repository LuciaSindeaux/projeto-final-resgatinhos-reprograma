import Header from "../components/Header";
import profile from "../assets/lucia.jpeg";
import styles from "../styles/pages/sobre.module.css";

const Sobre = () => {
  return (
    <>
      <Header title="Conheça um pouco mais sobre mim!" />
      <div className={styles.sobreContainer}>
      <img className={styles.photoProfile} src={profile} />  
      <div className={styles.textContainer}>
      <h1> Muito prazer em te conhecer!</h1>
       <p>
        Olá! Meu nome é Lúcia e sou estudante de Front-End na Reprograma e sou
        apaixonada por tecnologia! Atualmente, estou cursando Análise e
        Desenvolvimento de Sistemas e trabalho com QA Jr, onde tenho a
        oportunidade de aprender muito sobre Desenvolvimento de software, Testes
        e metodologias ágeis. Meu objetivo é aprimorar minhas habilidades em
        tecnologia e me tornar um profissional altamente qualificada. Dedico meu
        tempo livre para estudar e praticar novas tecnologias para me manter
        atualizada com as últimas tendências do mercado.
        </p>
      </div>
      </div>
    
    </>
  );
};

export default Sobre;
