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
        <Link className={styles.menuLink} to="/"> Home </Link>
      </li>
      <li>
        <Link className={styles.menuLink} to="/sobre"> Sobre </Link>
      </li>
      <li>
        <Link className={styles.menuLink} to="/apadrinhamento"> Apadrinhamento </Link>
      </li>
      <li>
        <Link className={styles.menuLink} to="/contato"> Envie sua nota fiscal! </Link>
      </li>
      </div>
    </nav></>
    
    
  );
};

export default Menu;
