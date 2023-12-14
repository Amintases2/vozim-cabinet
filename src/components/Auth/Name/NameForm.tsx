import { FormSubmitButton, ButtonText } from "@styles/GlobalStyles";
import {
  AuthInputLabel,
  AuthNameInput,
  NameFooterText,
  AuthCheckBox,
} from "@styles/AuthStyles";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "@hooks/useAuth";
import { useName } from "@hooks/useName";
import CheckboxFalse from "@assets/CheckboxFalse.svg";
import CheckboxTrue from "@assets/CheckboxTrue.svg";

// форма отправки имени
export default function NameForm() {
  const { name, setName } = useAuth();

  // отправка запроса на установку имени
  const { isLoading, error, data, isSuccess, refetch } = useName();

  // форма отправки телефона
  const { control, handleSubmit, setValue, clearErrors } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(refetch)}>
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
                onChange={(event) => {
                  setName(event.target.value);
                  setValue("name", event.target.value);
                  clearErrors("name");
                }}
                value={name}
                placeholder="Ваше имя"
                helperText={fieldState.invalid && "Ошибка в поле имя"}
                error={fieldState.invalid}
              />
            </>
          )}
        />
        <NameFooterText>
          <AuthCheckBox
            required
            checkedIcon={<img src={CheckboxTrue} />}
            icon={<img src={CheckboxFalse} />}
          />
          Я согласен с{" "}
          <span style={{ color: "black", cursor: "pointer" }}>
            Пользовательским соглашением
          </span>
        </NameFooterText>
        <FormSubmitButton loading={isLoading} type="submit" variant="contained">
          <ButtonText>Далее</ButtonText>
        </FormSubmitButton>
      </form>
    </>
  );
}
