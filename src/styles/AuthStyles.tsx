import { styled, Typography, TextField } from "@mui/material";

// белая обертка авторизации
const AuthWrapper = styled("div")`
  position: relative;
  background-color: white;
  box-sizing: border-box;
  border-radius: 16px;
  box-shadow: 0px 0px 60px 0px #0000000d;
  max-width: 100%;
  padding: 56px;
`;


// заголовок на компонентах входа
const AuthTitle = styled(Typography)`
  font-size: 24px;
  text-align: center;
  line-height: 36px;
  font-weight: 600;
`;

const AuthCodeInput = styled(TextField)`
  border-radius: 8px;
  display: inline;
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
// шаблон маленького текста
const AuthText = styled(Typography)`
  font-weight: 400;
  margin: 32px 0;
`;

// текст отправки сообщения на телефон
const PhoneText = styled(AuthText)`
  font-size: 14px;
  line-height: 20px;
`;

// текст для повторной отправки смс сообщения
const ResendCodeText = styled(Typography)`
  cursor: pointer;
  color: black;
  text-decoration: underline;
  font-size: 12px;
  line-height: 18px;
`

// текст перед сабмитом
const FooterText = styled(AuthText)`
  font-size: 12px;
  line-height: 18px;
  color: rgba(28, 28, 28, 0.6);
`;

export {
  AuthWrapper,
  AuthTitle,
  PhoneText,
  AuthCodeInput,
  FooterText,
  ResendCodeText,
};