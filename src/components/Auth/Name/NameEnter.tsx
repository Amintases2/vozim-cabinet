import NameForm from "./NameForm";
import AuthEnter from "../Layouts/AuthEnter";
// компонент для идентификации имени
export default function NameEnter() {
  return (
    <AuthEnter title="Познакомимся?">
      <NameForm />
    </AuthEnter>
  );
}
