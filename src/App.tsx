import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Logo from './components/Logo';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import PasswordChangePage from './pages/PasswordChangePage';
import ProfileEditPage from './pages/ProfileEditPage';
import SettingPage from './pages/SettingPage';
import UploadPage from './pages/UploadPage';
import UserFeedPage from './pages/UserFeedPage';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <div>
      <GlobalStyle />
      <AppContainer>
        <Logo />
        <BrowserRouter>
          <MainContent>
            <Routes>
              <Route path="/join" element={<JoinPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<MainPage />} />
              <Route path="/myPage" element={<MyPage />} />
              <Route path="/유저닉네임" element={<UserFeedPage />} />
              <Route path="/setting" element={<SettingPage />} />
              <Route path="/accounts/edit" element={<ProfileEditPage />} />
              <Route
                path="/accounts/password/change"
                element={<PasswordChangePage />}
              />
              <Route path="/upload" element={<UploadPage />} />
            </Routes>
          </MainContent>
        </BrowserRouter>
      </AppContainer>
    </div>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MainContent = styled.div`
  z-index: 2;
  position: relative;
  height: 100vh;
  width: 100%;
  min-width: 320px;
  max-width: 500px;
  background-color: white;
`;
