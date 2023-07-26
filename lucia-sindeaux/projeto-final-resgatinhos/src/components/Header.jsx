import styles from '../styles/components/header.module.css'

const Header = ({title, content}) => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}> {title} </h1>
      <p className={styles.headerContent}>{content}</p>      
    </div>
  )
}

export default Header