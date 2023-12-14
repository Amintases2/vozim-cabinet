import { FormSubmitButton, ButtonText } from "@styles/GlobalStyles";
import {
  PhoneFooterText,
  AuthInputLabel,
  AuthPhoneInput,
} from "@styles/AuthStyles";
import { useForm, Controller } from "react-hook-form";
import { matchIsValidTel } from "mui-tel-input";
import { useAuth } from "@hooks/useAuth";
import { useSendPhone } from "@hooks/useSendPhone.tsx";
import { AuthContextProps } from "@providers/AuthProvider.tsx";
import { useEffect } from "react";

// форма отправки смс кода
export default function PhoneForm() {
  const {phone, setPhone}: AuthContextProps = useAuth();

  // форма отправки телефона
  const {control, handleSubmit, setValue} = useForm();

  // отправка запроса на авторизацию по телефону
  const {isLoading, error, refetch} = useSendPhone();

  // автоофокус на телефон
  useEffect(() => {
    (
      document.querySelector(`input[name="phone"]`) as HTMLInputElement
    )?.focus();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(refetch)}>
        <AuthInputLabel>Номер телефона</AuthInputLabel>
        <Controller
          name="phone"
          control={control}
          // проверка корректности номера
          rules={{validate: matchIsValidTel}}
          render={({field, fieldState}) => (
            <>
              <AuthPhoneInput
                {...field}
                defaultCountry="RU"
                onlyCountries={["RU", "BY", "KZ"]}
                forceCallingCode
                onChange={(event) => {
                  setPhone(event);
                  setValue(`phone`, event);
                }}
                value={phone}
                helperText={
                  fieldState.invalid || error
                    ? "Ошибка в поле номер телефона"
                    : ""
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
        <FormSubmitButton loading={isLoading} type="submit" variant="contained">
          <ButtonText>Далее</ButtonText>
        </FormSubmitButton>
      </form>
    </>
  );
}
