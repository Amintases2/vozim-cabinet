import { AuthCodeInput } from "../../styles/AuthStyles";
import { ChangeEvent, useRef } from "react";

type CodeInputProps = {
  digits: string[];
  changeHandler: (digits: string[]) => void;
};

export default function CodeInput(props: CodeInputProps) {
  const { digits, changeHandler } = props;
  const length = digits.length;
  // здесь будут ссылки на input-элементы
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const handleChange = (index: number, newValue: string) => {
    const oldDigit = digits[index];
    // старую цифру в поле ввода убираем, оставляя только новую
    const newDigit = newValue.trim().replace(oldDigit, "");
    // если это не цифра и не пропуск, ничего не делаем, пока не будет цифры
    if ((newDigit < "0" || newDigit > "9") && newDigit !== "") return;
    // теперь вызываем callback родителя, чтобы обовить digits
    const newDigits = [...digits]; // копия digits
    newDigits[index] = newDigit;
    changeHandler(newDigits);
    // смещаем фокус на следующее поле для ввода следующей цифры, если стираем то не двигаемся
    if (newDigit !== "") {
      if (index < length - 1) {
        inputRefs.current[index + 1].focus();
      } else {
        inputRefs.current[index].blur();
        // или убираем фокус, если это было последнее поле
      }
    }
  };

  return (
    <div style={{ display: "flex", boxSizing: "border-box" }}>
      {digits.map((digit, index) => (
        <AuthCodeInput
          key={index}
          value={digit}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(index, event.target.value)
          }
          ref={(element: HTMLInputElement) =>
            (inputRefs.current[index] = element)
          }
        />
      ))}
    </div>
  );
}
