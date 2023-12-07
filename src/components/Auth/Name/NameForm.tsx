import { FormSubmitButton, ButtonText } from "../../../styles/GlobalStyles";
import {
  AuthInputLabel,
  AuthNameInput,
  NameFooterText,
} from "../../../styles/AuthStyles";
import { Checkbox, styled } from "@mui/material";
// форма отправки имени

const AuthCheckBox = styled(Checkbox)`
  padding: 2px;
  margin: 0 6px 0 0;
  color: rgba(28, 28, 28, 0.2);
  border-radius: 80px;
  > input {
    border-radius: 80px;
  }
  > .MuiSvgIcon-root {
    border-radius: 80px;
    font-size: 28px;
  }
`;

export default function NameForm() {
  return (
    <>
      <form>
        <AuthInputLabel>Имя</AuthInputLabel>
        <AuthNameInput fullWidth placeholder="Ваше имя" />
        <NameFooterText>
          <AuthCheckBox />Я согласен с <b>Пользовательским соглашением</b>
        </NameFooterText>
        <FormSubmitButton variant="contained">
          <ButtonText>Далее</ButtonText>
        </FormSubmitButton>
      </form>
    </>
  );
}
