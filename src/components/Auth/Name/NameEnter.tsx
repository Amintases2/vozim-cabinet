import { AuthTitle } from "../../../styles/AuthStyles";
import NameForm from "./NameForm";
// компонент для идентификации имени
export default function NameEnter() {
  return (
    <>
      <AuthTitle>Познакомимся?</AuthTitle>
      <NameForm />
    </>
  );
}
