import { useState } from "react";
import CodeInput from "./CodeInput";
import CodeTimer from "./CodeTimer";
import { PhoneCodeText } from "../../../styles/AuthStyles";
import { FormSubmitButton, ButtonText } from "../../../styles/GlobalStyles";
import useAuth from "../../../hooks/useAuth";
import { AuthContextProps } from "../../../providers/AuthProvider.tsx";
import { useForm } from "react-hook-form";

// форма отправки смс кода
export default function CodeForm() {
  const {setLeft, phone}: AuthContextProps = useAuth();

  // значение полей ввода
  const initDigits = ["", "", "", ""];
  const [digits, setDigits] = useState(initDigits);

  const {
    setValue,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode:"onChange"
  })
  const onSubmit = (data) => {
    console.log(data)
    setLeft(200)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PhoneCodeText>
          Введите смс-код, отправленный на номер <br />
          <b>{phone}</b>
        </PhoneCodeText>
        <CodeInput setValue={setValue} control={control} digits={digits} changeHandler={setDigits} />
        <CodeTimer />
        <FormSubmitButton type="submit" variant="contained">
          <ButtonText>Далее</ButtonText>
        </FormSubmitButton>
      </form>
    </>
  );
}
