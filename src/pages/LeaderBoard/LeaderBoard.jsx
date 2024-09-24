import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderBoard.module.css";
import { getLeaders } from "../../API/leaders";
import { Link } from "react-router-dom";

const LeaderBoard = () => {
  const [leaders, setLeaders] = useState([{ position: "Позиция", name: "Пользователь", time: "Время" }]);
  useEffect(() => {
    getLeaders().then(data => {
      setLeaders([...leaders, ...data.sort((a, b) => a.time - b.time)]);
    });
  }, []);

  const timeFormat = digit => {
    let minutes = Math.floor(digit / 60);
    let seconds = digit % 60;
    return [minutes < 10 ? "0" + minutes : minutes, ":", seconds < 10 ? "0" + seconds : seconds];
  };

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
                <li className={styles.thirdColumn}>{index === 0 ? player.time : timeFormat(player.time)}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeaderBoard;
