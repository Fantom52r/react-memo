import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderBoard.module.css";
import { getLeaders } from "../../API/leaders";
import { Link } from "react-router-dom";

// const COLUMNS_NAME = ["Позиция","Пользователь","Время"]
const LeaderBoard = () => {
  const [leaders, setLeaders] = useState([{ position: "Позиция", name: "Пользователь", time: "Время" }]);
  useEffect(() => {
    getLeaders().then(data => {
      setLeaders([...leaders, ...data.sort((a, b) => a - b)]);
    });
  }, []);
  return (
    <div className={styles.leaderBoardBlock}>
      <div className={styles.leaderBoarHeader}>
        <h1 className={styles.leaderBoardTitle}>Лидерборд</h1>
        <Link to={"/"}>
          <Button>Начать игру</Button>
        </Link>
      </div>
      <div>
        <ul className={styles.players}>
          {leaders.map((player, index) => (
            <li className={styles.statisticItem}>
              <ul className={styles.playerStatistic}>
                <li className={styles.firstColumn}>{index === 0 ? player.position : player.id}</li>
                <li className={styles.secondColumn}>{player.name}</li>
                <li className={styles.thirdColumn}>{player.time}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeaderBoard;
