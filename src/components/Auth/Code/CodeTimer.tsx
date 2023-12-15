import { useEffect, useState } from "react";
import { FooterText, ResendCodeText } from "@styles/AuthStyles";
import { useResendCode } from "@hooks/useResendCode.tsx";

// таймер для повторной отправки сообщений
export default function CodeTimer() {
  const [seconds, setSeconds] = useState(0);
  // переменные для отображения времени в минутах и секундах
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(Math.ceil(seconds % 60)).padStart(2, "0");

  const {refetch} = useResendCode()

  // логика таймера - вычетание секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => Math.max(s - 1, 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // обновление таймера, повторная отправка смс
  const handleClick = () => {
    setSeconds(90);
    refetch()
  };

  return (
    <FooterText>
      {seconds === 0 && (
        <ResendCodeText onClick={handleClick}>
          Отправить СМС-код повторно
        </ResendCodeText>
      )}
      {seconds !== 0 && (
        <span>
          Отправить повторно через {minutesString}:{secondsString}
        </span>
      )}
    </FooterText>
  );
}
