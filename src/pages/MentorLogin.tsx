import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore"; // adjust path as per your structure
 


const MentorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { setToken } = useAuthStore();
  const navigate = useNavigate();

const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:5000/api/mentor-login", {
      email,
      password,
    });

    const token = res.data.token;
    setToken(token); // save to Zustand store
    localStorage.setItem("mentorToken", token); 

    // Redirect to mentor dashboard
    navigate("/mentorDashboard");
  } catch (err: any) {
    alert(err.response?.data?.message || "Login failed");
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-launchpad-50 to-blue-50">
      <Card className="w-full max-w-md shadow-2xl p-4">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold">Mentor Login</CardTitle>
          <CardDescription>
            Log in to provide expert feedback and help startups grow.
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleLogin}>
          <CardContent className="grid gap-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="mentor@example.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full bg-launchpad-600 hover:bg-launchpad-700 text-white">
              Login
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              Not a Mentor?{" "}
              <Link to="/register" className="text-launchpad-600 hover:underline font-medium">
                Click here
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default MentorLogin;
