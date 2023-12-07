import { AuthTitle } from "../../../styles/AuthStyles";
import PhoneForm from "./PhoneForm";

// компонент для идентификации телефона
export default function PhoneEnter(props) {
  return (
    <>
      <AuthTitle>Вход</AuthTitle>
      <PhoneForm nextStep={props.nextStep} />
    </>
  );
}
