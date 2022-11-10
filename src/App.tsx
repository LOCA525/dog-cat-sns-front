import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import './App.css';
import UploadPage from './components/Board/UploadEditUi';
import Logo from './components/Logo';
import CardDetailPage from './pages/CardDetailPage';
import CommentPage from './pages/CommentPage';
import EditPage from './pages/EditPage';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import PasswordChangePage from './pages/PasswordChangePage';
import ProfileEditPage from './pages/ProfileEditPage';
import SettingPage from './pages/SettingPage';
import GlobalStyle from './styles/GlobalStyle';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <GlobalStyle />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <AppContainer>
            <Logo />
            <BrowserRouter>
              <MainContent>
                <Routes>
                  <Route path="/join" element={<JoinPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/" element={<MainPage />} />
                  <Route path="/myPage/:id" element={<MyPage />} />
                  <Route path="/cardDetail/:id" element={<CardDetailPage />} />
                  <Route path="/setting" element={<SettingPage />} />
                  <Route path="/accounts/edit" element={<ProfileEditPage />} />
                  <Route path="/accounts/password/change" element={<PasswordChangePage />} />
                  <Route path="/upload" element={<UploadPage />} />
                  <Route path="/edit" element={<EditPage />} />
                  <Route path="/comment" element={<CommentPage />} />
                </Routes>
              </MainContent>
            </BrowserRouter>
          </AppContainer>
        </QueryClientProvider>
      </RecoilRoot>
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
