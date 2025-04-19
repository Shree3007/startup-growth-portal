import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../../firebase";

import { Button } from "@/components/ui/button";
import { RocketIcon, PlusIcon } from "lucide-react";
import { PlaneIcon } from "lucide-react";

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); // Redirect to home after logout
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <PlaneIcon className="h-6 w-6 text-launchpad-600" />
          <Link to="/" className="text-xl font-bold text-launchpad-800">
            PitchPilot
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/pitches"
            className="text-sm font-medium hover:text-launchpad-600 transition-colors"
          >
            Explore Pitches
          </Link>
          <Link
            to="/mentors"
            className="text-sm font-medium hover:text-launchpad-600 transition-colors"
          >
            Mentors
          </Link>
          <Link
            to="/dashboard"
            className="text-sm font-medium hover:text-launchpad-600 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/resources"
            className="text-sm font-medium hover:text-launchpad-600 transition-colors"
          >
            Resources
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {!user ? (
            <>
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex"
              asChild
            >
              <Link to="/mentorLogin">Login as Mentor</Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex"
              asChild
            >
              <Link to="/login">Sign In</Link>
            </Button>
            </>
          ) : (
            <>
              <Button
              variant="outline"
              size="sm"
              className="hidden md:flex"
              asChild
            >
              <Link to="/mentorLogin">Login as Mentor</Link>
            </Button>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="hidden md:flex"
              >
                Logout
              </Button>
            </>
          )}

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
