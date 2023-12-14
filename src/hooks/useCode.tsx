import { useQuery } from "@tanstack/react-query";
import AuthService from "@services/AuthService.tsx";
import { useAuth } from "@hooks/useAuth";
import { setFocusAfter } from "@helpers/helper";

// хук useQuery для 2ого шага - идентификации смс кода
const useCode = () => {
  const { setLeft, phone, digits }: AuthContextProps = useAuth();

  return useQuery({
    queryKey: ["code"],
    queryFn: () => {
      const response = AuthService.authTest2(
        phone.split(" ").join(""),
        digits.join(""),
      );
      response
        .then((result) => {
          console.log(result.status);

          if (result.status === 200) {
            //пролистывание
            setLeft(200);

            // устанавливаем фокус на след шаг
            setFocusAfter(`input[name="name"]`);
          } else if (result.status === 201) {
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
    select: ({ data }) => data,
    // кол-во попыток на сервер до ошибки
    retry: 2,
    // автозапрос выкл - работает на refetch
    enabled: false,
  });
};

export { useCode };
