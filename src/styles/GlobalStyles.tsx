import { Typography, Button, Container, styled } from "@mui/material";
const ContentCenterWrapper = styled(Container)`
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormSubmitButton = styled("button")`
  background-color: #148eff;
  border-radius: 8px;
  padding: 8px 16px;
  border: none;
  width: 100%;
`;
const ButtonText = styled(Typography)`
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
`;

export { ContentCenterWrapper, FormSubmitButton, ButtonText };
