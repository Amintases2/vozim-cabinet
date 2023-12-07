import { useEffect, useState } from "react";
import { FooterText, ResendCodeText } from "../../../styles/AuthStyles";

// таймер для повторной отправки сообщений
export default function CodeTimer() {
  const [seconds, setSeconds] = useState(0);
  // переменные для отображения времени в минутах и секундах
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(Math.ceil(seconds % 60)).padStart(2, "0");

  // логика таймера - вычетание секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => Math.max(s - 1, 0));
    }, 1000);
    return () => clearInterval(interval);
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
        <ResendCodeText onClick={() => clickHandler()}>
          Отправить СМС-код повторно
        </ResendCodeText>
      )}
    </FooterText>
  );
}
