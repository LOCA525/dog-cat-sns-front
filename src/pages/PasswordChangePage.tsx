import PasswordChangeForm from '../components/Account/PasswordChangeForm';
import BottomNav from '../components/BottomNav/BottomNav';
import UserHeader from '../components/UserHeader';

function PasswordChangePage() {
  return (
    <>
      <UserHeader headerTitle="비밀번호 변경" />
      <PasswordChangeForm />
      <BottomNav />
    </>
  );
}

export default PasswordChangePage;
