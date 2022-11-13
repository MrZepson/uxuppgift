import styles from "./About.module.css";
import bloodbath from "../videos/bloodbathComp.mp4";
import master from "../videos/masterComp.mp4";
import cliffs from "../videos/cliffsComp.mp4";
import guitarist from "../img/guitarist.jpg";

export default function About() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.aboutMeWrapper}>
        <article className={styles.aboutMeContent}>
          <h2>About me</h2>
          <p>
            My name is Daniel Häggström, I've been playing guitar for over 15
            years now. I studied music with orientation guitar in gymnasium.
            I've been teaching guitar for 5 years and i love my job!
          </p>
          <p>
            In the bottom of the page you can see some of the songs i know how
            to play, but you can see all of them on my youtube channel! Link:{" "}
            <a href="https://www.youtube.com/channel/UCbu2ajcHYgypcrcBQ5JnSkw">
              https://www.youtube.com/RaZzle
            </a>
          </p>
        </article>
        <div className={styles.imgWrapper}>
          <img
            className={styles.img}
            src={guitarist}
            alt="A guy playing guitar on stage behind a microphone"
          />
        </div>
      </div>
      <div className={styles.videosWrapper}>
        <video src={bloodbath} controls height="259.2" width="460.8"></video>
        <video src={master} controls height="259.2" width="460.8"></video>
        <video src={cliffs} controls height="259.2" width="460.8"></video>
      </div>
    </section>
  );
}
