import styles from "./Info.module.css";
import guitarImage from "../img/guitar.jpg";

export default function Info() {
  return (
    <section className={styles.outerWrapper}>
      <div className={styles.wrapper}>
        <article className={styles.infoWrapper}>
          <h1>Information</h1>
          <p>
            Everything you will need to bring yourself is listed below. I will
            provide with notes and all the materials you will need.
          </p>
          <h2>You need to bring:</h2>
          <ul>
            <li>Guitar</li>
            <li>Amplifire</li>
          </ul>
        </article>
        <div className={styles.imgWrapper}>
          <img
            className={styles.img}
            src={guitarImage}
            alt="A picture of a blue fender guitar standing on a couch with a red light behind it."
          />
        </div>
      </div>
    </section>
  );
}
