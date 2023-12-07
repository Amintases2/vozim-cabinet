import { useEffect, useState } from "react";
import { FooterText } from "../../../styles/AuthStyles";

// таймер для повторной отправки сообщений
export default function CodeTimer() {
  const [seconds, setSeconds] = useState(5);
  // переменные для отображения времени в минутах и секундах
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(Math.ceil(seconds % 60)).padStart(2, "0");

  // логика таймера - вычетание секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => Math.max(s - 0.5, 0));
      if (seconds <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  }, []);

  // обновление таймера, повторная отправка сообщений
  const clickHandler = () => {
    setSeconds(90);
  };

  return (
    <FooterText>
      {seconds !== 0 ? (
        <span>
          Отправить повторно через {minutesString}:{secondsString}
        </span>
      ) : (
        <span onClick={() => clickHandler()}>
          Нажмите, чтобы получить код повтворно
        </span>
      )}
    </FooterText>
  );
}
