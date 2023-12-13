import PhoneForm from "./PhoneForm";
import AuthEnter from "../Layouts/AuthEnter";

// компонент для идентификации телефона
export default function PhoneEnter() {
  return (
    <AuthEnter title="Вход">
      <PhoneForm />
    </AuthEnter>
  );
}
