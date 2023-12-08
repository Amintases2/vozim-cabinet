import { FormSubmitButton, ButtonText } from "../../../styles/GlobalStyles";
import {
  AuthInputLabel,
  AuthNameInput,
  NameFooterText,
  AuthCheckBox,
} from "../../../styles/AuthStyles";

// форма отправки имени
export default function NameForm() {
  return (
    <>
      <form>
        <AuthInputLabel>Имя</AuthInputLabel>
        <AuthNameInput fullWidth placeholder="Ваше имя" />
        <NameFooterText>
          <AuthCheckBox />Я согласен с{" "}
          <span style={{ color: "black", cursor: "pointer" }}>
            Пользовательским соглашением
          </span>
        </NameFooterText>
        <FormSubmitButton variant="contained">
          <ButtonText>Далее</ButtonText>
        </FormSubmitButton>
      </form>
    </>
  );
}
