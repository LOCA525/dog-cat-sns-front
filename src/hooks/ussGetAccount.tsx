import { SetStateAction } from 'react';
import { getAccount } from '../api/account';

function ussGetAccount(setAccount: SetStateAction<any>) {
  async function getAccountData() {
    try {
      const response = await getAccount();
      if (response.status === 200) {
        if (response.data) {
          if (setAccount) setAccount(response.data);
        }
        return response.data;
      }
    } catch (error) {
      return null;
    }
  }

  return getAccountData;
}

export default ussGetAccount;
