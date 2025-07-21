import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          &copy; 2024 Your Name. All rights reserved. Built with Next.js and
          CSS.
        </p>
      </div>
    </footer>
  );
}
