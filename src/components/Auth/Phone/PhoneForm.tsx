import { FormSubmitButton, ButtonText } from "../../../styles/GlobalStyles";
import {
  PhoneFooterText,
  AuthInputLabel,
  AuthPhoneInput,
} from "../../../styles/AuthStyles";
import { useForm, Controller } from "react-hook-form";
import { matchIsValidTel } from "mui-tel-input";
import useAuth from "../../../hooks/useAuth";
import { AuthContextProps } from "../../../providers/AuthProvider.tsx";
import { useEffect } from "react";

// форма отправки смс кода
export default function PhoneForm() {
  const { setLeft, setPhone }: AuthContextProps = useAuth();

  // форма отправки телефона
  const { control, handleSubmit, setFocus } = useForm({
    defaultValues: {
      phone: "",
      defaultCountry: undefined,
    },
  });

  // подтверждение формы -> номер телефона для следующего шага и пролистывание
  const onSubmit = (data: { phone: string }) => {
    console.log();
    setLeft(100);
    setPhone(data.phone);
  };

  useEffect(() => {
    setFocus("defaultCountry");
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthInputLabel>Номер телефона</AuthInputLabel>
        <Controller
          name="phone"
          control={control}
          // проверка корректности номера
          rules={{ validate: matchIsValidTel }}
          render={({ field, fieldState }) => (
            <>
              <AuthPhoneInput
                {...field}
                defaultCountry="RU"
                inputRef={(input) => input && input.focus()}
                onlyCountries={["RU", "BY", "KZ"]}
                forceCallingCode
                helperText={
                  fieldState.invalid ? "Ошибка в поле номер телефона" : ""
                }
                error={fieldState.invalid}
                // autoFocus
              />
            </>
          )}
        />
        <PhoneFooterText>
          Если вы ещё не регистрировались, то это <br /> произойдет
          автоматически
        </PhoneFooterText>
        <FormSubmitButton type="submit" variant="contained">
          <ButtonText>Далее</ButtonText>
        </FormSubmitButton>
      </form>
    </>
  );
}
