import { Link } from "react-router-dom";
import Logo from "../assets/resgatinhos.png";
import styles from "../styles/components/menu.module.css";

const Menu = () => {
  return (
    <>
    <nav className={styles.menuContainer}>
    <img src={Logo} alt="Logo" className={styles.menuLogo} />
    <div className={styles.menuList}>
      <li>
        <Link className={styles.menuLink} to="/"> Conheça a ong </Link>
      </li>
      <li>
        <Link className={styles.menuLink} to="/noticias"> Notícias </Link>
      </li>
      <li>
        <Link className={styles.menuLink} to="/apadrinhamento"> Apadrinhamento </Link>
      </li>
      <li>
        <Link className={styles.menuLink} to="/comoAjudar"> Como ajudar </Link>
      </li>
      </div>
    </nav></>
    
    
  );
};

export default Menu;
