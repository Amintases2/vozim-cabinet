import { styled, Typography } from "@mui/material";

// белая обертка авторизации
const AuthWrapper = styled("div")`
  display: flex;
  position: relative;
  background-color: white;
  box-sizing: border-box;
  border-radius: 16px;
  box-shadow: 0px 0px 60px 0px #0000000d;
  max-width: 440px;
  #overflow: hidden;
`;

const Slide = styled("div")`
  padding: 56px;
  position: relative;
  #left: -440px;
`;

const FirstBlock = styled(Slide)``;

const SecondBlock = styled(Slide)``;

const ThirdBlock = styled(Slide)``;

// заголовок на компонентах входа
const AuthTitle = styled(Typography)`
  font-size: 24px;
  text-align: center;
  line-height: 36px;
  font-weight: 600;
`;

// квадратик ввода цифры из смс кода
const AuthCodeInput = styled("input")`
  border: 2px solid rgba(28, 28, 28, 0.1);
  border-radius: 8px;
  display: inline;
  height: 60px;
  max-width: 70px;
  box-sizing: border-box;
  font-size: 24px;
  text-align: center;
  margin-right: 16px;
  outline: none;
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
  FirstBlock,
  SecondBlock,
  ThirdBlock,
};
