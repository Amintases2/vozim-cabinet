import { AuthTitle, SecondBlock } from "../../../styles/AuthStyles";
import CodeForm from "./CodeForm";

// компонент для идентификации смс кода
export default function CodeEnter() {
  return (
    <>
      <SecondBlock>
        <AuthTitle>Вход</AuthTitle>
        <CodeForm />
      </SecondBlock>
    </>
  );
}
