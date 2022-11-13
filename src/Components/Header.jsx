import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <section className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <img
          className={styles.logo}
          onClick={() => {
            navigate("/");
          }}
          src={logo}
          alt="Logo that says Daniel's Guitarschool, with a double line over the text and a guitar in the center"
        />
      </div>
      <nav className={styles.links}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/about-me">
          About Me
        </Link>
        <Link className={styles.link} to="/book-lesson">
          Book Lesson
        </Link>
      </nav>
    </section>
  );
}
