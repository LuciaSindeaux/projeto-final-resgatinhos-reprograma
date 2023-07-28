import Header from "../components/Header";
import styles from "../styles/pages/sobre.module.css";

const Sobre = () => {
  return (
    <>
      <Header 
      title="Notícias do Mundo Pet no Paraná"
      subtitle="Descubra as histórias mais encantadoras e emocionantes do mundo dos animais no Paraná! Acompanhe as aventuras dos nossos amigos de quatro patas, as adoções que mudam vidas, e as iniciativas inspiradoras que estão tornando o estado ainda mais pet-friendly. Fique por dentro das últimas novidades e acontecimentos que aquecem nossos corações peludos." />
      <div className={styles.newsContainer}>
        <div className={styles.newsColumn}>
          <div className={styles.newsCard}>
            <div className={styles.newsText}>
              <h4>Hospital Veterinário da UFPR atende com carinho todos os tipos de animais</h4>
            </div>
            <a href="https://www.tribunapr.com.br/noticias/curitiba-regiao/hospital-veterinario-da-ufpr-atende-com-carinho-todos-os-tipos-de-animais/" target="_blank">
              <img src="https://www.tribunapr.com.br/wp-content/uploads/2020/02/17084334/HOSPITAL-VETERINARIO-3-970x550.jpg" alt="materia sobre hospital veterinario ufpr" />
            </a>
          </div>
        </div>
        <div className={styles.newsColumn}>
          <div className={styles.newsCard}>
            <div className={styles.newsText}>
              <h4>Amigo Bicho registra 25 adoções de cães e doação de 1 tonelada de ração em Curitiba</h4>
            </div>
            <a href="https://www.curitiba.pr.gov.br/noticias/amigo-bicho-registra-25-adocoes-de-caes-e-doacao-de-1-tonelada-de-racao-em-curitiba/68384" target="_blank">
              <img src="https://mid.curitiba.pr.gov.br/2023/destaque/00386815.jpg" alt="materia sobre feira de adoção em curitiba" />
            </a>
          </div>
        </div>
        <div className={styles.newsColumn}>
          <div className={styles.newsCard}>
            <div className={styles.newsText}>
              <h4>UFPR acolhe cães e gatos abandonados; veja como adotar</h4>
            </div>
            <a href="https://massanews.com/noticia/parana/curitiba/ufpr-acolhe-caes-e-gatos-abandonados-veja-como-adotar/" target="_blank">
              <img src="https://cdnmassanews.azureedge.net/wordpressmassanews/2023/02/ufpr-acolhe-caes-e-gatos.jpg" alt="materia sobre ufpr acolher caes e gatos abandonados" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sobre;
