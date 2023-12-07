import { AuthTitle, FirstBlock } from "../../../styles/AuthStyles";
import CodeForm from "../Code/CodeForm";

// компонент для идентификации телефона
export default function PhoneEnter() {
  return (
    <>
      <FirstBlock>
        <AuthTitle>Вход</AuthTitle>
        <CodeForm />
      </FirstBlock>
    </>
  );
}
