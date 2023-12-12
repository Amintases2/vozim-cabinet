import { Stack } from "@mui/material";
import { HeaderHelpText, AuthSmallText } from "../../../styles/AuthStyles";
import Logo from "../../../assets/Logo.svg";

export default function Header() {
  return (
    <Stack
      alignItems="center"
      justifyContent="space-between"
      direction="row"
      boxSizing="border-box"
      style={{
        padding: "16px 28px",
        position: "absolute",
        top: "0",
        width: "100%",
      }}
    >
      <div>
        <img src={Logo} />
      </div>
      <div>
        <div>
          <HeaderHelpText>Поддержка</HeaderHelpText>
        </div>
        <div>
          <AuthSmallText>+375 (29) 6666-565</AuthSmallText>
        </div>
      </div>
    </Stack>
  );
}
