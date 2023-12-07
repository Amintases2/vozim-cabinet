import { FormSubmitButton, ButtonText } from "../../../styles/GlobalStyles";
import {
  PhoneFooterText,
  AuthInputLabel,
  AuthPhoneInput,
} from "../../../styles/AuthStyles";
import { useState } from "react";

// форма отправки смс кода
export default function PhoneForm(props) {
  const setLeft = props.nextStep;
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <form>
        <AuthInputLabel>Номер телефона</AuthInputLabel>
        <AuthPhoneInput
          defaultCountry="RU"
          onlyCountries={["RU", "BY"]}
          forceCallingCode
          value={value}
          onChange={handleChange}
        />
        <PhoneFooterText>
          Если вы ещё не регистрировались, то это <br /> произойдет
          автоматически
        </PhoneFooterText>
        <FormSubmitButton onClick={() => setLeft(100)} variant="contained">
          <ButtonText>Далее</ButtonText>
        </FormSubmitButton>
      </form>
    </>
  );
}
