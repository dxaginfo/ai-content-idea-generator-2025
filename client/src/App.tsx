import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, CircularProgress } from '@mui/material';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import IdeaGeneratorPage from './pages/IdeaGeneratorPage';
import ContentCalendarPage from './pages/ContentCalendarPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

// Placeholder components (to be implemented)
const HomePage = () => <div>Home Page</div>;
const LoginPage = () => <div>Login Page</div>;
const RegisterPage = () => <div>Register Page</div>;
const DashboardPage = () => <div>Dashboard Page</div>;
const IdeaGeneratorPage = () => <div>Idea Generator Page</div>;
const ContentCalendarPage = () => <div>Content Calendar Page</div>;
const ProfilePage = () => <div>Profile Page</div>;
const NotFoundPage = () => <div>404 Not Found</div>;
const MainLayout = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      {/* Protected routes */}
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/generator" element={<IdeaGeneratorPage />} />
      <Route path="/calendar" element={<ContentCalendarPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      
      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
