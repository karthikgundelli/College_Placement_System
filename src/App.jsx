import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import AptitudeTest from './components/AptitudeTest';
import ResumeBuilder from './components/ResumeBuilder';
import AptitudePractice from './components/AptitudePractice';
import NewPage from './components/NewPage';
import UserDriveTable from './components/UserDriveTable';
import MockInterviewPage from './pages/MockInterview';
import AuthWrapper from './components/AuthWrapper';
import Login from './components/Login';
import AdminDriveTable from './components/AdiminDriveTable';
import ChangePassword from './components/ChangePassword';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aptitude" element={<AptitudeTest />} />
        <Route path="/who-are-we" element={<NewPage />} />
        <Route path="/resume" element={<ResumeBuilder />} />
        <Route path="/drives" element={<UserDriveTable />} />
        <Route path="/interview" element={<MockInterviewPage />} />
        <Route path="/aptitude/:company" element={<AptitudePractice />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/drives" element={
          <AuthWrapper>
            <AdminDriveTable/>
          </AuthWrapper>
        } />
        <Route path="/admin/change-password" element={
  <AuthWrapper>
    <ChangePassword />
  </AuthWrapper>
} />
        <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;