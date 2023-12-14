import { useState } from "react";
import CodeInput from "./CodeInput";
import CodeTimer from "./CodeTimer";
import { PhoneCodeText } from "@styles/AuthStyles";
import { FormSubmitButton, ButtonText } from "@styles/GlobalStyles";
import { useAuth } from "@hooks/useAuth";
import { useCode } from "@hooks/useCode";
import { AuthContextProps } from "@providers/AuthProvider.tsx";
import { useForm } from "react-hook-form";

type CodeSubmitProps = {
  input0: string;
  input1: string;
  input2: string;
  input3: string;
};

// форма отправки смс кода
export default function CodeForm() {
  const { setLeft, phone }: AuthContextProps = useAuth();
  const { isLoading, error, data, isSuccess, refetch } = useCode();

  const {
    clearErrors,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
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
