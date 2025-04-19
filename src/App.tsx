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
import MentorDashboard from "./pages/mentor/MentorDashboard";
import MentorPitches from "./pages/mentor/MentorPitches";
import MentorFeedback from "./pages/mentor/MentorFeedback";
import MentorSchedule from "./pages/mentor/MentorSchedule";
import MentorSettings from "./pages/mentor/MentorSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/pitches" element={<Pitches />} />
            <Route path="/pitches/:id" element={<PitchDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/submit-pitch" element={<SubmitPitch />} />
            
            {/* Mentor Routes */}
            <Route path="/mentor">
              <Route index element={<MentorDashboard />} />
              <Route path="pitches" element={<MentorPitches />} />
              <Route path="feedback" element={<MentorFeedback />} />
              <Route path="schedule" element={<MentorSchedule />} />
              <Route path="settings" element={<MentorSettings />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
