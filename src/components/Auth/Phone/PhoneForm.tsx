import { FormSubmitButton, ButtonText } from "../../../styles/GlobalStyles";
import {
  PhoneFooterText,
  AuthInputLabel,
  AuthPhoneInput,
} from "../../../styles/AuthStyles";
import { useForm, Controller } from "react-hook-form";
import { matchIsValidTel } from "mui-tel-input";
import useAuth from "../../../hooks/useAuth";

// форма отправки смс кода
export default function PhoneForm() {
  const { setLeft, setPhone } = useAuth();

  // форма отправки телефона
  const { control, handleSubmit } = useForm({
    defaultValues: {
      phone: "",
    },
  });

  // подтверждение формы -> номер телефона для следующего шага и пролистывание
  const onSubmit = (event) => {
    setLeft(100);
    setPhone(event.phone);
  };

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
                onlyCountries={["RU", "BY"]}
                forceCallingCode
                helperText={
                  fieldState.invalid ? "Ошибка в поле номер телефона" : ""
                }
                error={fieldState.invalid}
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
