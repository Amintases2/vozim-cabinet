import {
  styled,
  Typography,
  TextField,
  InputLabel,
  Checkbox,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

// белая обертка авторизации
const AuthWrapper = styled("div")`
  position: relative;
  background-color: white;
  box-sizing: border-box;
  border-radius: 16px;
  width: 100%;
  padding: 56px;
  box-shadow: 0 0 20px 0 #0000000d;
  margin: 40px;
  @media (max-width: 425px) {
    margin: 0;
  }
`;

// заголовок на компонентах входа
const AuthTitle = styled(Typography)`
  font-size: 24px;
  text-align: center;
  line-height: 36px;
  font-weight: 600;
`;
// Лейбл для инпута телефона и имени
const AuthInputLabel = styled(InputLabel)`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 6px;
  color: black;
`;
// инпут ввода телефона
const AuthPhoneInput = styled(MuiTelInput)`
  > div {
    height: 40px;

    > fieldset {
      border-radius: 8px;
      border-color: rgba(28, 28, 28, 0.2);
    }
  }

  > .MuiFormHelperText-root {
    font-size: 14px;
    line-height: 20px;
    margin: 6px 0 0 0;
  }
`;
// базовый инпут
const AuthBaseInput = styled(TextField)`
  > div {
    > fieldset {
      border-radius: 8px;
      border-color: rgba(28, 28, 28, 0.2);
    }
  }
`;
// инпут ввода имени
const AuthNameInput = styled(AuthBaseInput)`
  #box-shadow: 0 1px 2px 0 #1018280d;

  > div {
    height: 40px;

    > input {
      font-size: 14px;
      line-height: 24px;
      outline: none;
    }
  }
  > .MuiFormHelperText-root {
    font-size: 14px;
    line-height: 20px;
    margin: 6px 0 0 0;
  }
`;
// квадратик ввода кода
const AuthCodeInput = styled(AuthBaseInput)`
  height: 60px;
  max-width: 70px;

  > div {
    > input {
      font-size: 24px;
      text-align: center;
      outline: none;
    }
  }
`;
// чекбокс для пользовательского соглашения
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
// текст для повторной отправки смс сообщения
const ResendCodeText = styled(Typography)`
  cursor: pointer;
  color: black;
  text-decoration: underline;
  font-size: 12px;
  line-height: 18px;
`;
// шаблон маленького текста
const AuthText = styled(Typography)`
  font-weight: 400;
  margin: 32px 0;
`;

// текст отправки сообщения на телефон
const PhoneCodeText = styled(AuthText)`
  font-size: 14px;
  line-height: 20px;
`;

// текст перед сабмитом
const FooterText = styled(AuthText)`
  font-size: 12px;
  line-height: 18px;
  color: rgba(28, 28, 28, 0.6);
`;
// футер в Phone
const PhoneFooterText = styled(FooterText)`
  margin: 24px 0 32px 0;
`;
// футер в Name
const NameFooterText = styled(FooterText)`
  margin: 28px 0;
`;

// слайдер для смены стадии авторизации
const AuthSlider = styled("div")`
  max-width: 520px;
  overflow: hidden;
`;
// обертка для слайдов
const Slides = styled("div")((props: { left: 0 | 100 | 200 }) => ({
  width: "300%",
  height: "100%",
  display: "flex",
  //gap: "40px",
  alignItems: "center",
  position: "relative",
  left: `-${props.left}%`,
  transition: "all 0.2s ease-in-out",
}));

export {
  AuthWrapper,
  AuthTitle,
  PhoneCodeText,
  AuthCodeInput,
  FooterText,
  ResendCodeText,
  AuthInputLabel,
  AuthNameInput,
  AuthPhoneInput,
  AuthCheckBox,
  PhoneFooterText,
  NameFooterText,
  AuthSlider,
  Slides,
};
