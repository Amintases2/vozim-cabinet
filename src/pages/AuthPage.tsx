import { CodeEnter } from "../components/Auth";
import { ContentCenterWrapper } from "../styles/GlobalStyles";
import { AuthWrapper } from "../styles/AuthStyles";

export default function AuthPage() {
  return (
    <ContentCenterWrapper>
      <AuthWrapper>
        <CodeEnter></CodeEnter>
      </AuthWrapper>
    </ContentCenterWrapper>
  );
}