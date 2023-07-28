import styles from '../styles/components/header.module.css'

const Header = ({title, subtitle}) => {
  return (
    <><div className={styles.headerBackground}>
      <div className={styles.headerContainer}>
      <h2 className={styles.headerTitle}> {title} </h2>
      <h3 className={styles.headerSubtitle}>{subtitle}</h3>
      </div>
       <div className={styles.headerContent}>
      </div>      
      </div>
      </>   
  )
}

export default Header