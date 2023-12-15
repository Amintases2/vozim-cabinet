import { useQuery } from "@tanstack/react-query";
import AuthService from "@services/AuthService.tsx";
import { useAuth } from "@hooks/useAuth";
import { AuthContextProps } from "@providers/AuthProvider.tsx";
import { setFocus } from "@helpers/helper.tsx";

// хук useQuery для 2ого шага - отправки кода заного
const useResendCode = () => {
  const {phone, setDigits}: AuthContextProps = useAuth();

  return useQuery({
    queryKey: ["recode"],
    queryFn: () => {
      const response = AuthService.authRecode(
        phone.split(" ").join(""),
      );
      response
        .then((result) => {
          console.log(result);
          // обновление полей ввода кода
          setDigits(['', '', '', ''])
          setFocus(`input[name="input0"]`)
          return result;
        })
        .catch((error) => {
          console.error(error);
          return Promise.reject(error);
        });
      return response;
    },
    // кол-во попыток на сервер до ошибки
    retry: 2,
    // автозапрос выкл - работает на refetch
    enabled: false,
  });
};

export { useResendCode };