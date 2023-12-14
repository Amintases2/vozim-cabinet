import { useQuery } from "@tanstack/react-query";
import AuthService from "@services/AuthService.tsx";
import { useAuth } from "@hooks/useAuth";
import { setFocusAfter } from "@helpers/helper";
import { AuthContextProps } from "@providers/AuthProvider.tsx";

// хук useQuery для 2ого шага - идентификации смс кода
const useSendCode = () => {
  const {setLeft, phone, digits}: AuthContextProps = useAuth();

  return useQuery({
    queryKey: ["code"],
    queryFn: () => {
      const response = AuthService.authCode(
        phone.split(" ").join(""),
        digits.join(""),
      );
      response
        .then((result) => {
          console.log(result);
          AuthService.cookies.set('token', result.data.token)
          const isRegistered = result.data.userInfo.registered
          if (isRegistered) {
            console.log(isRegistered)
          } else if (!isRegistered) {
            //пролистывание
            setLeft(200);

            // устанавливаем фокус на след шаг
            setFocusAfter(`input[name="name"]`);
          }

          return result;
        })
        .catch((error) => {
          console.error(error);
          return Promise.reject(error);
        });
      return response;
    },
    // деструктурируем дату
    select: ({data}) => data,
    // кол-во попыток на сервер до ошибки
    retry: 2,
    // автозапрос выкл - работает на refetch
    enabled: false,
  });
};

export { useSendCode };
