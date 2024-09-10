import { useNavigate } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useContext, useState } from "react";
import { EasyContext } from "../../context/Context";
import clsx from "clsx";
const levels = [
  {
    level: 1,
    pairs: 3,
  },
  {
    level: 2,
    pairs: 6,
  },
  {
    level: 3,
    pairs: 9,
  },
];
export function SelectLevelPage() {
  const { isEasyMode, setEasyMode } = useContext(EasyContext);
  const [level, setLevel] = useState(3);
  const navigate = useNavigate();
  function onClick(value) {
    setLevel(value);
  }
  function onStart() {
    navigate(`/game/${level}`);
  }
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          {levels.map(l => (
            <li onClick={() => onClick(l.pairs)} className={clsx(styles.level, { [styles.active]: l.pairs === level })}>
              <div className={styles.levelLink}>{l.level}</div>
            </li>
          ))}
        </ul>

        <label className={styles.label}>
          Легкий режим
          <input type="checkbox" checked={isEasyMode} onChange={e => setEasyMode(e.target.checked)} />
          <div className={styles.checkbox}></div>
        </label>

        <button onClick={onStart}>Начать игру</button>
      </div>
    </div>
  );
}
