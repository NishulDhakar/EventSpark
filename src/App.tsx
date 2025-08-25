import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


// Auth Pages
import { LoginPage, RegisterPage } from "./pages/auth";

import NotFoundPage from './pages/error/NotFoundPage/NotFoundPage'
import { HomePage } from './pages/public';
import AboutPage from './pages/public/AboutPage/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* -------- Public Routes -------- */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="about" element={<AboutPage />} />
        {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        <Route path="/events" element={<EventListPage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} /> */}

        {/* -------- Protected Routes -------- */}
        {/* <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardHomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardHomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events/create"
          element={
            <ProtectedRoute>
              <CreateEventPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tickets"
          element={
            <ProtectedRoute>
              <TicketListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tickets/:id"
          element={
            <ProtectedRoute>
              <TicketDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        /> */}

        {/* -------- Catch-All -------- */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
