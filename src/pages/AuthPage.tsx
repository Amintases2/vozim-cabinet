import {
  CodeEnter,
  PhoneEnter,
  NameEnter,
  MobileApp,
  Header,
} from "../components/Auth";
import { ContentCenterWrapper } from "../styles/GlobalStyles";
import { AuthWrapper, AuthSlider, Slides } from "../styles/AuthStyles";
import useAuth from "../hooks/useAuth";
import { Stack } from "@mui/material";

// страница авторизации
export default function AuthPage() {
  const { left } = useAuth();
  return (
    <Stack direction={{ xs: "column", sm: "row" }} height={"100vh"}>
      <Stack style={{ flexGrow: "1", position: "relative" }}>
        <Header />
        <ContentCenterWrapper>
          <AuthSlider>
            <Slides left={left}>
              <AuthWrapper>
                <PhoneEnter></PhoneEnter>
              </AuthWrapper>
              <AuthWrapper>
                <CodeEnter></CodeEnter>
              </AuthWrapper>
              <AuthWrapper>
                <NameEnter></NameEnter>
              </AuthWrapper>
            </Slides>
          </AuthSlider>
        </ContentCenterWrapper>
      </Stack>
      <MobileApp />
    </Stack>
  );
}
