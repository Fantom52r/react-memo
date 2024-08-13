import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { Link } from "react-router-dom";

export function EndGameModal({ isWon, gameDurationSeconds, gameDurationMinutes, onClick }) {
  const title = isWon ? "Вы победили!" : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";
  // Добваить инпут Введения имени и кнопку по которой отправляется результат в лидерборд
  // 'этот компонент принимает еще один пропс которы называется isLeader и он показывает нужно отправлять результат или нет .
  // нужно проверять играешь ли ты на третьем уровне переменная PairsCount
  // валидировать пустые поля и пробелы с помощью метода trim
  // изменить переменную title проверять перед isWon переменную isleader если она тру то в title должна быть строка - вы попали на Лидерборд.
  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <Button onClick={onClick}>Начать сначала</Button>
      <Link to={"/leaderboard"}>Перейти к Лидерборду</Link>
    </div>
  );
}
