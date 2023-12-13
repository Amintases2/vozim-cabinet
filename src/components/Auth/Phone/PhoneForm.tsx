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
import { useQuery } from "react-query";

// форма отправки смс кода
export default function PhoneForm() {
  const { setLeft, setPhone }: AuthContextProps = useAuth();

  // форма отправки телефона
  const { control, handleSubmit } = useForm({
    defaultValues: {
      phone: "",
      defaultCountry: undefined,
    },
  });

  // отправка телефона при сабмите
  const { isLoading, error, data, refetch } = useQuery(
    "phone",
    () =>
      fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
        (res) => res.json(),
      ),
    { refetchOnMount: false },
  );
  console.log(data);

  // подтверждение формы -> номер телефона для следующего шага и пролистывание и автофокус на 1ый квадратик
  const onSubmit = (data: { phone: string }) => {
    // таймаут, чтобы не перекашивало влево до полной прокрутки
    setTimeout(
      () =>
        (
          document.querySelector(`input[name="input0"]`) as HTMLInputElement
        )?.focus(),
      500,
    );

    setLeft(100);
    setPhone(data.phone);
  };
  // автоофокус на телефон
  useEffect(() => {
    (
      document.querySelector(`input[name="phone"]`) as HTMLInputElement
    )?.focus();
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
                onlyCountries={["RU", "BY", "KZ"]}
                forceCallingCode
                fullWidth
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
        <FormSubmitButton loading={isLoading} type="submit" variant="contained">
          <ButtonText>Далее</ButtonText>
        </FormSubmitButton>
      </form>
    </>
  );
}
