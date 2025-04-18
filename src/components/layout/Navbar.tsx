
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RocketIcon, BarChartIcon, MessageCircleIcon, UserIcon, PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <RocketIcon className="h-6 w-6 text-launchpad-600" />
          <Link to="/" className="text-xl font-bold text-launchpad-800">
            LaunchPad
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/pitches" className="text-sm font-medium hover:text-launchpad-600 transition-colors">
            Explore Pitches
          </Link>
          <Link to="/mentors" className="text-sm font-medium hover:text-launchpad-600 transition-colors">
            Mentors
          </Link>
          <Link to="/dashboard" className="text-sm font-medium hover:text-launchpad-600 transition-colors">
            Dashboard
          </Link>
          <Link to="/resources" className="text-sm font-medium hover:text-launchpad-600 transition-colors">
            Resources
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button 
            size="sm" 
            className="bg-launchpad-600 hover:bg-launchpad-700 gap-1"
            asChild
          >
            <Link to="/submit-pitch">
              <PlusIcon className="h-4 w-4" /> Submit Pitch
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
