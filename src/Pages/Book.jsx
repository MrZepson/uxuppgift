import styles from "./Book.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Book() {
  const [filled, setfilled] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  function submitMessage(e) {
    e.preventDefault();
    if (firstName && lastName && email && date && time) {
      alert(`Thanks for the booking ${firstName} ${lastName}`);
    } else {
      alert("You need to fill in the required* fields!");
    }
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="firstName">
            First Name *
          </label>
          <input
            className={`${styles.input} ${styles.nameInput}`}
            type="text"
            name="firstName"
            required
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <label className={styles.label} htmlFor="lastName">
            Last Name *
          </label>
          <input
            className={`${styles.input} ${styles.nameInput}`}
            type="text"
            name="lastName"
            required
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <label className={styles.label} htmlFor="email">
            E-mail *
          </label>
          <input
            className={`${styles.input} ${styles.emailInput}`}
            type="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className={styles.dateAndTimeWrapper}>
            <div className={styles.dateWrapper}>
              <label className={styles.label} htmlFor="date">
                Date *
              </label>
              <input
                className={`${styles.dateInput}`}
                type="date"
                name="date"
                required
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <div className={styles.timeWrapper}>
              <label className={styles.label} htmlFor="time">
                Time *
              </label>
              <input
                className={`${styles.timeInput}`}
                type="time"
                name="time"
                required
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
            </div>
          </div>
          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            className={styles.textarea}
            cols="30"
            rows="10"
          ></textarea>
          <div className={styles.buttonWrapper}>
            <button
              onClick={(e) => {
                submitMessage(e);
              }}
              className={styles.submitButton}
              type="submit"
            >
              Book Lesson!
            </button>
            <button
              className={styles.backToHome}
              onClick={() => {
                navigate("/");
              }}
            >
              Back to home
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
