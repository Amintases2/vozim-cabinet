import CodeInput from "./CodeInput";
import CodeTimer from "./CodeTimer";
import { PhoneCodeText } from "@styles/AuthStyles";
import { FormSubmitButton, ButtonText } from "@styles/GlobalStyles";
import { useAuth } from "@hooks/useAuth";
import { useSendCode } from "@hooks/useSendCode.tsx";
import { AuthContextProps } from "@providers/AuthProvider.tsx";
import { useForm } from "react-hook-form";

// форма отправки смс кода
export default function CodeForm() {
  const {phone}: AuthContextProps = useAuth();
  const {isLoading, error, refetch} = useSendCode();

  const {
    clearErrors,
    setValue,
    control,
    handleSubmit,
  } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(refetch)}>
        <PhoneCodeText>
          Введите смс-код, отправленный на номер <br />
          <b>{phone}</b>
        </PhoneCodeText>
        <CodeInput
          setValue={setValue}
          control={control}
          clearErrors={clearErrors}
          error={error}
        />
        <CodeTimer />
        <FormSubmitButton loading={isLoading} type="submit" variant="contained">
          <ButtonText>Далее</ButtonText>
        </FormSubmitButton>
      </form>
    </>
  );
}
