import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postJoin } from '../api/account';

function usePostJoin() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(postJoin, {
    onSuccess: async () => queryClient.invalidateQueries(['join']),
  });

  return mutate;
}

export default usePostJoin;
