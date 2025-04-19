import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Pitches from "./pages/Pitches";
import PitchDetail from "./pages/PitchDetail";
import Dashboard from "./pages/Dashboard";
import Mentors from "./pages/Mentors";
import Resources from "./pages/Resources";
import SubmitPitch from "./pages/SubmitPitch";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login"; // 👈 Import Login
import Register from "./pages/Register"; // 👈 Import Register
import { UserProvider } from "./context/UserContext";
import MentorLogin from "./pages/MentorLogin";
import MentorDashboard from "./pages/MentorDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <UserProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} /> {/* ✅ */}
          <Route path="/register" element={<Register />} /> {/* ✅ */}

          <Route path="/mentorLogin" element={<MentorLogin/>} /> {/* ✅ */}

          {/* Main layout + nested routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/pitches" element={<Pitches />} />
            <Route path="/pitches/:id" element={<PitchDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/submit-pitch" element={<SubmitPitch />} />
            
          <Route path="/mentorDashboard" element={<MentorDashboard/>} /> {/* ✅ */}
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
