import styles from "./navigation.module.css";
import ThemeToggle from "../theme/ThemeToggle";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.brand}>Portfolio</div>
        <div className={styles.navContent}>
          <ul className={styles.links}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
