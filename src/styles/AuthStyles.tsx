import { styled, Typography } from "@mui/material";

const AuthWrapper = styled("div")`
  padding: 56px;
  max-width: 100%;
  background-color: white;
  box-sizing: border-box;
  border-radius: 16px;
  box-shadow: 0px 0px 60px 0px #0000000d;
`;
const AuthTitle = styled(Typography)`
  font-size: 24px;
  text-align: center;
  line-height: 36px;
  font-weight: 600;
`;

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

const AuthText = styled(Typography)`
  font-weight: 400;
  margin: 32px 0;
`;

const PhoneText = styled(AuthText)`
  font-size: 14px;
  line-height: 20px;
`;

const TimerText = styled(AuthText)`
  font-size: 12px;
  line-height: 18px;
  color: rgba(28, 28, 28, 0.6);
`;

export { AuthWrapper, AuthTitle, PhoneText, AuthCodeInput, TimerText };
