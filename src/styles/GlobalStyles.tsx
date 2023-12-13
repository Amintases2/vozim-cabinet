import { Typography, Button, Container, styled } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// шаблон самого маленького текста
const SmallestText = styled(Typography)`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

// шаблон маленького текста
const SmallText = styled(Typography)`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

// шаблон большого текста
const HugeText = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
`;

// шаблон ОГРОМНОГО ТЕКСТА
const HugestText = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
`;

// текст внутри кнопки
const ButtonText = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
`;

// центрирование объектов по центру на 100vh
const ContentCenterWrapper = styled(Container)`
  position: relative;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// primary button для формы
const FormSubmitButton = styled(LoadingButton)`
  text-transform: capitalize;
  background-color: #148eff;
  border-radius: 8px;
  padding: 8px 16px;
  border: none;
  width: 100%;
`;

export {
  ContentCenterWrapper,
  FormSubmitButton,
  ButtonText,
  SmallestText,
  SmallText,
  HugeText,
  HugestText,
};
