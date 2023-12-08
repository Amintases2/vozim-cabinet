import { useState } from "react";
import CodeInput from "./CodeInput";
import CodeTimer from "./CodeTimer";
import { PhoneCodeText } from "../../../styles/AuthStyles";
import { FormSubmitButton, ButtonText } from "../../../styles/GlobalStyles";
import useAuth from "../../../hooks/useAuth";

// форма отправки смс кода
export default function CodeForm() {
  const { setLeft, phone } = useAuth();

  // значение полей ввода
  const initDigits = ["", "", "", ""];
  const [digits, setDigits] = useState(initDigits);

  return (
    <>
      <form>
        <PhoneCodeText>
          Введите смс-код, отправленный на номер <br />
          <b>{phone}</b>
        </PhoneCodeText>
        <CodeInput digits={digits} changeHandler={setDigits} />
        <CodeTimer />
        <FormSubmitButton onClick={() => setLeft(200)} variant="contained">
          <ButtonText>Далее</ButtonText>
        </FormSubmitButton>
      </form>
    </>
  );
}
