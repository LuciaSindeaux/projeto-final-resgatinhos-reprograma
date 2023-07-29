import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/resgatinhos.png";
import styles from "../styles/components/menu.module.css";

const Menu = () => {
  // Get the current location using the useLocation hook from react-router-dom
  const location = useLocation();

  return (
    <>
      <nav className={styles.menuContainer}>
        <img src={Logo} alt="Logo" className={styles.menuLogo} />
        <div className={styles.menuList}>
          <li>
            <Link
              className={`${styles.menuLink} ${
                location.pathname === "/" ? styles.active : ""
              }`}
              to="/"
            >
              Conheça a ong
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.menuLink} ${
                location.pathname === "/noticias" ? styles.active : ""
              }`}
              to="/noticias"
            >
              Notícias
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.menuLink} ${
                location.pathname === "/apadrinhamento" ? styles.active : ""
              }`}
              to="/apadrinhamento"
            >
              Apadrinhamento
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.menuLink} ${
                location.pathname === "/comoAjudar" ? styles.active : ""
              }`}
              to="/comoAjudar"
            >
              Como ajudar
            </Link>
          </li>
        </div>
      </nav>
    </>
  );
};

export default Menu;
