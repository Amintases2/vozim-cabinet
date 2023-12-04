import { ContentCenterWrapper } from "../../styles/GlobalStyles";
import { AuthTitle, AuthWrapper } from "../../styles/AuthStyles";
import CodeForm from "./CodeForm";

export default function CodeConfirm() {
  return (
    <>
      <ContentCenterWrapper>
        <AuthWrapper>
          <AuthTitle>Вход</AuthTitle>
          <CodeForm />
        </AuthWrapper>
      </ContentCenterWrapper>
    </>
  );
}
