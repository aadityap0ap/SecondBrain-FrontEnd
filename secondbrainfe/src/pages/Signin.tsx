import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { BACKEND_URL } from "../config";

export function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  //const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      //setLoading(true);  
      const response = await axios.post(BACKEND_URL + "/signin", {
        username,
        password,
      });
      const token = response.data.token;
      if (!token) {
        alert("Invalid response from server");
        return;
      }
      //storing token in local storage but we can use httpcookie and react in memeory
      // store token
      localStorage.setItem("token", token);

      // redirect to dashboard
      navigate("/dashboard");

    } catch (err: any) {
      console.log(err);
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Signin failed ");
    } 
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-md border min-w-48 p-8 flex flex-col items-center">
        
        <h2 className="text-xl font-semibold mb-4">Sign In</h2>

        <Input ref={usernameRef} placeholder="Username" />
        <Input ref={passwordRef} placeholder="Password" />

        <div className="flex justify-center pt-4 w-full">
          <Button
            variant="secondary"
            size="md"
            text={"SignIn"}
            onClick={signin}
          />
        </div>

      </div>
    </div>
  );
}