import { CodeEnter, PhoneEnter, NameEnter } from "../components/Auth";
import { ContentCenterWrapper } from "../styles/GlobalStyles";
import {
  AuthWrapper,
  AuthSlider,
  Slides,
  FirstSlide,
} from "../styles/AuthStyles";
import { useState } from "react";

// страница авторизации
export default function AuthPage() {
  // отклонение слайдера влево 0 100 200
  const [left, setLeft] = useState(0);
  return (
    <ContentCenterWrapper>
      <AuthSlider>
        <Slides left={left}>
          <AuthWrapper>
            <PhoneEnter nextStep={setLeft}></PhoneEnter>
          </AuthWrapper>
          <AuthWrapper>
            <CodeEnter nextStep={setLeft}></CodeEnter>
          </AuthWrapper>
          <AuthWrapper>
            <NameEnter></NameEnter>
          </AuthWrapper>
        </Slides>
      </AuthSlider>
    </ContentCenterWrapper>
  );
}
