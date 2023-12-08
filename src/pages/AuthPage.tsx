import { CodeEnter, PhoneEnter, NameEnter } from "../components/Auth";
import { ContentCenterWrapper } from "../styles/GlobalStyles";
import { AuthWrapper, AuthSlider, Slides } from "../styles/AuthStyles";
import useAuth from "../hooks/useAuth";

// страница авторизации
export default function AuthPage() {
  const { left } = useAuth();
  return (
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
  );
}
