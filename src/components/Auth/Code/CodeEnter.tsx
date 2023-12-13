import CodeForm from "./CodeForm";
import AuthEnter from "../Layouts/AuthEnter";

// компонент для идентификации смс кода
export default function CodeEnter() {
  return (
    <>
      <AuthEnter title="Вход">
        <CodeForm />
      </AuthEnter>
    </>
  );
}
