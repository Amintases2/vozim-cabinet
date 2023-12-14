import { useQuery } from "@tanstack/react-query";
import AuthService from "@services/AuthService.tsx";
import { useAuth } from "@hooks/useAuth";
import { setFocusAfter } from "@helpers/helper";

// хук useQuery для 1ого шага - идентификации телефона
const usePhone = () => {
  const { setLeft, phone }: AuthContextProps = useAuth();

  return useQuery({
    queryKey: ["phone"],
    queryFn: () => {
      const response = AuthService.authTest(phone.split(" ").join(""));
      response
        .then((result) => {
          console.log(result);
          // пролистывание
          setLeft(100);

          // устанавливаем фокус на след шаг
          setFocusAfter(`input[name="input0"]`);
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

export { usePhone };
