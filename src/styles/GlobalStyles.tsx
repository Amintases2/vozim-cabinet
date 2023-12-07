import { Typography, Button, Container, styled } from "@mui/material";

// центрирование объектов по центру на 100vh
const ContentCenterWrapper = styled(Container)`
  position: relative;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// primary button для формы
const FormSubmitButton = styled(Button)`
  text-transform: capitalize;
  background-color: #148eff;
  border-radius: 8px;
  padding: 8px 16px;
  border: none;
  width: 100%;
`;
// текст внутри кнопки
const ButtonText = styled(Typography)`
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
`;

export { ContentCenterWrapper, FormSubmitButton, ButtonText };

