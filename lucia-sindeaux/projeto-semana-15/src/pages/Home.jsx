import Header from "../components/Header"
import home from '../assets/home.svg'
import { FinnTheHuman, BracketsCurly, AddressBook } from 'phosphor-react'

import styles from '../styles/pages/home.module.css'

const Home = () => {
  return (
    <>
      <Header title="Meu cantinho" 
      image={home} 
      />
      <div className={styles.homeContainer}>
      <div className={styles.cardContainer}>
        <FinnTheHuman size={150} color="#609dcf" weight="thin"/>
        <h2 className={styles.cardTitle}>Vida</h2>
        <p className={styles.cardDescription}>Cearense, com 29 anos e cheia de sonhos!</p>
      </div>
      <div className={styles.cardContainer}>
        < BracketsCurly size={150} color="#609dcf" weight="thin"/>
        <h2 className={styles.cardTitle}>Código</h2>
        <p className={styles.cardDescription}>Analista de QA Jr.</p>
      </div>
      <div className={styles.cardContainer}>
        < AddressBook size={150} color="#609dcf" weight="thin"/>
        <h2 className={styles.cardTitle}>Contato</h2>
        <p className={styles.cardDescription}>Entre em contato e me conheça um pouco mais!
        </p>
      </div>
      </div>
    </>
  )
}

export default Home