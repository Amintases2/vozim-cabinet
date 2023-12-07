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
  #vertical-align: center;
  position: relative;
  background-color: white;
  box-sizing: border-box;
  border-radius: 16px;
  width: 100%;
  padding: 56px;
  #box-shadow: 0px 0px 20px 0px #0000000d;
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
  box-shadow: 0px 1px 2px 0px #1018280d;
  > div {
    height: 40px;
    > fieldset {
      border-radius: 8px;
      border-color: rgba(28, 28, 28, 0.2);
    }
  }
`;
// базовый инпут
const AuthInput = styled(TextField)`
  > div {
    > fieldset {
      border-radius: 8px;
      border-color: rgba(28, 28, 28, 0.2);
    }
  }
`;
// инпут ввода имени
const AuthNameInput = styled(AuthInput)`
  box-shadow: 0px 1px 2px 0px #1018280d;
  > div {
    height: 40px;
    > input {
      font-size: 14px;
      line-height: 24px;
      outline: none;
    }
  }
`;
// квадратик ввода кода
const AuthCodeInput = styled(AuthInput)`
  height: 60px;
  max-width: 70px;
  margin-right: 16px;

  > div {
    > input {
      font-size: 24px;
      text-align: center;
      outline: none;
    }
  }

  &:nth-last-of-type(1) {
    margin-right: 0;
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
// футер в Name
const PhoneFooterText = styled(FooterText)`
  margin: 24px 0 32px 0;
`;
// футер в Name
const NameFooterText = styled(FooterText)`
  margin: 28px 0;
`;

// слайдер для смены стадии авторизации
const AuthSlider = styled("div")`
  max-width: 440px;
  overflow: hidden;
  box-shadow: 0px 0px 60px 0px #0000000d;
  #padding: 40px;
`;
// обертка для слайдов
const Slides = styled("div")((props) => ({
  width: "300%",
  height: "100%",
  display: "flex",
  //alignItems: "center",
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
  PhoneFooterText,
  NameFooterText,
  AuthSlider,
  Slides,
};
