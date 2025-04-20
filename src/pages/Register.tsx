import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  AuthError,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      const authError = err as AuthError;
      setError(authError.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      const authError = err as AuthError;
      setError(authError.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-launchpad-50 to-green-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {error && (
          <p className="text-red-500 mb-4 text-sm text-center">{error}</p>
        )}

        <form onSubmit={handleEmailRegister} className="grid gap-4">
          <button
            type="button"
            onClick={handleGoogleRegister}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition duration-200"
          >
            Register with Google
          </button>
        </form>

        <p className="mt-6 text-sm text-center">
          Already registered?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Click here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
