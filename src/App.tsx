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
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
