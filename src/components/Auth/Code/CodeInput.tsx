import { AuthCodeInput } from "../../../styles/AuthStyles";
import { ChangeEvent, useEffect, useRef } from "react";
import { Stack } from "@mui/material";
import { Controller } from "react-hook-form";

type CodeInputProps = {
  digits: string[];
  changeHandler: (digits: string[]) => void;
  control: any;
  setValue: any;
};

// 4 поля ввода для смс кода
export default function CodeInput(props: CodeInputProps) {
  const { digits, changeHandler, control, setValue, clearErrors } = props;

  const length = digits.length;

  // здесь будут ссылки на input-элементы
  const inputRefs = useRef<HTMLElement[]>([]);

  const handleChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const oldDigit = digits[index];

    // старую цифру в поле ввода убираем, оставляя только новую
    const newDigit = event.target.value.trim().replace(oldDigit, "");

    // если это не цифра или пропуск, ничего не делаем, пока не будет цифры или пропуска
    if ((newDigit < "0" || newDigit > "9") && newDigit !== "") return;

    // теперь вызываем callback родителя, чтобы обовить digits
    const newDigits = [...digits]; // копия digits
    newDigits[index] = newDigit;
    changeHandler(newDigits);

    // обновляем значение в хук форме
    setValue(`input${index}`, newDigits[index]);

    // смещаем фокус на следующее поле для ввода следующей цифры, если стираем то идем назад
    if (newDigit === "") {
      if (index !== 0) {
        (
          inputRefs.current[index - 1].children[0]
            .children[0] as HTMLInputElement
        )?.focus();
      }
    }
    if (newDigit !== "") {
      // очищаем ошибки
      clearErrors(`input${index}`);
      if (index < length - 1) {
        (
          inputRefs.current[index + 1].children[0]
            .children[0] as HTMLInputElement
        )?.focus();
      }
    }
  };
  return (
    <Stack direction="row" spacing={2}>
      {digits.map((digit, index) => (
        <Controller
          key={index}
          name={`input${index}`}
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <>
              <AuthCodeInput
                {...field}
                autoComplete="off"
                value={digit}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChange(index, event)
                }
                ref={(element: HTMLInputElement) =>
                  (inputRefs.current[index] = element)
                }
                error={fieldState.invalid}
              />
            </>
          )}
        />
      ))}
    </Stack>
  );
}
