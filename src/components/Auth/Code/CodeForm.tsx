import { useState } from "react";
import CodeInput from "./CodeInput";
import CodeTimer from "./CodeTimer";
import { PhoneCodeText } from "../../../styles/AuthStyles";
import { FormSubmitButton, ButtonText } from "../../../styles/GlobalStyles";

// форма отправки смс кода
export default function CodeForm(props) {
  const setLeft = props.nextStep;
  // значение полей ввода
  const initDigits = ["", "", "", ""];
  const [digits, setDigits] = useState(initDigits);

  return (
    <>
      <form>
        <PhoneCodeText>
          Введите смс-код, отправленный на номер <br />
          <b>+7 (954) 238-45-23</b>
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
