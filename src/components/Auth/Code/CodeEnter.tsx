import { AuthTitle } from "../../../styles/AuthStyles";
import CodeForm from "./CodeForm";

// компонент для идентификации смс кода
export default function CodeEnter(props) {
  return (
    <>
      <AuthTitle>Вход</AuthTitle>
      <CodeForm nextStep={props.nextStep} />
    </>
  );
}
