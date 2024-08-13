import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderBoard.module.css";
import { getLeaders } from "../../API/leaders";
import { Link } from "react-router-dom";

const LeaderBoard = () => {
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    getLeaders().then(data => {
      setLeaders(data.sort((a, b) => a - b).splice(0, 10));
    });
  }, []);
  return (
    <div>
      <div className={styles.top}>
        <h1>Лидерборд</h1>
        <Link to={"/"}>
          <Button>Начать игру</Button>
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <div className={styles.leaders}>
              <h1>Позиция</h1>
              <h1>Пользователь</h1>
              <h1>Время</h1>
            </div>
          </li>
          {leaders.map((l, index) => (
            <li>
              <div>{index + 1}</div>
              <div>{l.name}</div>
              <div>{l.time}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeaderBoard;
