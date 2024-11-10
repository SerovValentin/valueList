import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");

  const onInputButtonClick = () => {
    const promtValue = prompt("Введите значение");
    if (promtValue.length >= 3) {
      setValue(promtValue);
      setError("");
    } else {
      setError(promtValue);
    }
  };

  const isValueValid = value.length < 3 ? false : true;

  const onAddButtonClick = (value) => {
    const id = Date.now();
    const createTime = new Date().toLocaleString();
    const updateList = [...list, { id, value, createTime }];
    setList(updateList);
    setError("");
    setValue("");
    console.log(list);
  };

  return (
    <>
      <div className={styles.app}>
        <h1 className={styles.pageHeading}>Ввод значения</h1>
        <p className={styles.noMarginText}>
          Текущее значение <code>value</code>: "
          <output className={styles.currentValue}>{value}</output>"
        </p>
        {error !== "" && (
          <div className={styles.error}>
            Введенное значение должно содержать минимум 3 символа
          </div>
        )}
        <div className={styles.buttonsContainer}>
          <button className={styles.button} onClick={onInputButtonClick}>
            Ввести новое
          </button>
          <button
            className={styles.button}
            disabled={!isValueValid}
            onClick={() => onAddButtonClick(value)}
          >
            Добавить в список
          </button>
        </div>
        <div className={styles.listContainer}>
          <h2 className={styles.listHeading}>Список:</h2>

          {list.length < 1 ? (
            <p className={styles.noMarginText}>Нет добавленных элементов</p>
          ) : (
            <ul className={styles.list}>
              {list.map((listItem) => {
                return (
                  <li className={styles.listItem} key={listItem.id}>
                    {listItem.value} {listItem.createTime}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
