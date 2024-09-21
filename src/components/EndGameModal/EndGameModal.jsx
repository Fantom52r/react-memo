import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { addLeader } from "../../API/leaders.js";

export function EndGameModal({ isWon, gameDurationSeconds, gameDurationMinutes, onClick }) {
  const { pairsCount } = useParams();
  const [error, setError] = useState();
  const nav = useNavigate();

  const thirdLevelPairs = 9;
  const isLeader = isWon && Number(pairsCount) === thirdLevelPairs;
  const title = isLeader ? "Вы попали на лидерборд!" : isWon ? "Вы выйграли!" : "Вы проиграли!";

  //const title = isWon ? "Вы выйграли!" : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  const [leader, setAddLeader] = useState({
    name: "",
    time: gameDurationMinutes.toString().padStart("2", "0") + gameDurationSeconds.toString().padStart("2", "0"),
  });

  const addLeaderToList = async e => {
    e.preventDefault();
    if (leader.name === "") {
      setError("Введите имя пользователя");
      return;
    }
    try {
      await addLeader({ name: leader.name, time: leader.time }).then(res => {
        setAddLeader(res.leaders);
        nav("/leaderBoard");
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {isLeader ? (
        <div className={styles.userBlockName}>
          <input
            onChange={e => setAddLeader({ ...leader, name: e.target.value })}
            id="name-input"
            type="text"
            name="name"
            className={styles.input}
            placeholder="Пользователь"
          />
        </div>
      ) : null}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}: {gameDurationSeconds.toString().padStart("2", "0")}
      </div>
      <Button onClick={onClick}>Играть снова</Button>
      {isLeader ? (
        <Link to="/leaderboard">
          <button onClick={addLeaderToList} className={styles.btnLeaderBoard} type="submit">
            Перейти к лидерборду
          </button>
        </Link>
      ) : null}
      {error && <p> {error}</p>}
    </div>
  );
}
