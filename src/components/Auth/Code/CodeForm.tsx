import { useState } from "react";
import CodeInput from "./CodeInput";
import CodeTimer from "./CodeTimer";
import { PhoneText } from "../../../styles/AuthStyles";
import { FormSubmitButton, ButtonText } from "../../../styles/GlobalStyles";
import React from "react";
import { MuiTelInput } from "mui-tel-input";

// форма отправки смс кода
export default function CodeForm() {
  // значение полей ввода
  const initDigits = ["", "", "", ""];
  const [digits, setDigits] = useState(initDigits);

  return (
    <>
      <form>
        <PhoneText>
          Введите смс-код, отправленный на номер <br />
          <b>+7 (954) 238-45-23</b>
        </PhoneText>
        <CodeInput digits={digits} changeHandler={setDigits} />
        <CodeTimer />
        <FormSubmitButton variant="contained">
          <ButtonText>Далее</ButtonText>
        </FormSubmitButton>
      </form>
    </>
  );
}
