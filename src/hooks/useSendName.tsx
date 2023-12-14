import { useQuery } from "@tanstack/react-query";
import AuthService from "@services/AuthService.tsx";
import { useAuth } from "@hooks/useAuth";
import { AuthContextProps } from "@providers/AuthProvider.tsx";

// хук useQuery для 3ого шага - установка имени

const useSendName = () => {
  const {name}: AuthContextProps = useAuth();

  return useQuery({
    queryKey: ["name"],
    queryFn: () => {
      const response = AuthService.authName(name);
      response
        .then((result) => {
          console.log(result);

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

export { useSendName };
