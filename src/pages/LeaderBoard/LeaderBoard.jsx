import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderBoard.module.css";
import { getLeaders } from "../../API/leaders";
import { Link } from "react-router-dom";

const LeaderBoard = () => {
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    getLeaders().then(data => {
      setLeaders(data.sort((a, b) => a - b));
    });
  }, []);
  console.log(leaders);
  return (
    <div className={styles.leaderBoardBlock}>
      <div className={styles.leaderBoarHeader}>
        <h1>Лидерборд</h1>
        <Link to={"/"}>
          <Button>Начать игру</Button>
        </Link>
      </div>
      <div>
        <ul className={styles.players}>
          <li>
            <ul className={styles.leaders}>
              <li>Позиция</li>
              <li>Пользователь</li>
              <li>Время</li>
            </ul>
          </li>
          {leaders.map((l, index) => (
            <li>
              <ul>
                <li>{index + 1}</li>
                <li>{l.name}</li>
                <li>{l.time}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeaderBoard;
