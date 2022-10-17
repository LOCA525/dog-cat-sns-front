import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postLogin } from '../api/account';

function usePostLogin() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(postLogin, {
    onSuccess: async () => queryClient.invalidateQueries(['login']),
  });

  return mutate;
}

export default usePostLogin;
