import { FormSubmitButton, ButtonText } from "@styles/GlobalStyles";
import {
  AuthInputLabel,
  AuthNameInput,
  NameFooterText,
  AuthCheckBox,
} from "@styles/AuthStyles";
import { useForm, Controller } from "react-hook-form";

// форма отправки имени
export default function NameForm() {
  // форма отправки телефона
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data: { name: string }) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthInputLabel>Имя</AuthInputLabel>
        <Controller
          name="name"
          control={control}
          // проверка корректности номера
          rules={{ required: true, pattern: /^[A-Za-zА-ЯёЁа-я- ]+$/ }}
          render={({ field, fieldState }) => (
            <>
              <AuthNameInput
                {...field}
                fullWidth
                autoComplete="off"
                placeholder="Ваше имя"
                helperText={fieldState.invalid ? "Ошибка в поле имя" : ""}
                error={fieldState.invalid}
              />
            </>
          )}
        />
        <NameFooterText>
          <AuthCheckBox
            required
            checkedIcon={
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 2C5.58172 2 2 5.58172 2 10V22C2 26.4183 5.58172 30 10 30H22C26.4183 30 30 26.4183 30 22V10C30 5.58172 26.4183 2 22 2H10ZM22.0607 14.5607C22.6464 13.9749 22.6464 13.0251 22.0607 12.4393C21.4749 11.8536 20.5251 11.8536 19.9393 12.4393L15 17.3787L12.5607 14.9393C11.9749 14.3536 11.0251 14.3536 10.4393 14.9393C9.85355 15.5251 9.85355 16.4749 10.4393 17.0607L13.5858 20.2071C14.3668 20.9882 15.6332 20.9882 16.4142 20.2071L22.0607 14.5607Z"
                  fill="#007AFF"
                />
              </svg>
            }
            icon={
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 4H10C6.68629 4 4 6.68629 4 10V22C4 25.3137 6.68629 28 10 28H22C25.3137 28 28 25.3137 28 22V10C28 6.68629 25.3137 4 22 4ZM10 2C5.58172 2 2 5.58172 2 10V22C2 26.4183 5.58172 30 10 30H22C26.4183 30 30 26.4183 30 22V10C30 5.58172 26.4183 2 22 2H10Z"
                  fill="#1C1C1C"
                  fillOpacity="0.1"
                />
              </svg>
            }
          />
          Я согласен с{" "}
          <span style={{ color: "black", cursor: "pointer" }}>
            Пользовательским соглашением
          </span>
        </NameFooterText>
        <FormSubmitButton type="submit" variant="contained">
          <ButtonText>Далее</ButtonText>
        </FormSubmitButton>
      </form>
    </>
  );
}
