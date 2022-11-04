import ProfileEditForm from '../components/Account/ProfileEditForm';
import BottomNav from '../components/BottomNav/BottomNav';
import UserHeader from '../components/UserHeader';

function ProfileEditPage() {
  return (
    <>
      <UserHeader headerTitle="프로필 편집" />
      <ProfileEditForm />
      <BottomNav />
    </>
  );
}

export default ProfileEditPage;
