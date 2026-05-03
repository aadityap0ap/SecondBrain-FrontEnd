import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Button } from "../components/ui/Button";
import { BACKEND_URL } from "../config";

export function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function signin() {
    if (!username || !password) return;

    try {
      const response = await axios.post(`${BACKEND_URL}/signin`, {
        username,
        password,
      });

      const token = response.data.token;

      if (!token) {
        alert("Invalid response from server");
        return;
      }

      localStorage.setItem("token", token);

      navigate("/dashboard");
    } catch (err: any) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Signin failed");
    }
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-md border min-w-48 p-8 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4">Sign In</h2>

        <input
          className="px-4 py-2 border rounded m-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="px-4 py-2 border rounded m-2"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-center pt-4 w-full">
          <Button
            variant="secondary"
            size="md"
            text="SignIn"
            onClick={signin}
          />
        </div>
      </div>
    </div>
  );
}