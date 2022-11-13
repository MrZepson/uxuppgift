import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";
import hero from "../img/hero-guitar.jpg";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <main className={styles.wrapper}>
      <img
        className={styles.heroImage}
        src={hero}
        alt="A neck of a guitar with someones hand playing on it."
      />
      <section className={styles.overlay}>
        <div className={styles.textWrapper}>
          <h1 className={styles.heroText1}>Learn how to play guitar</h1>
          <h1 className={styles.heroText2}>TODAY!</h1>
          <button
            onClick={() => {
              navigate("/book-lesson");
            }}
            className={styles.bookBtn}
          >
            Book Here!
          </button>
        </div>
      </section>
    </main>
  );
}
