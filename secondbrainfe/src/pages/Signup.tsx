import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post(BACKEND_URL + "/signup", {
        username,
        password,
      });
      alert("You are SignedUp!");
      navigate("/signin");
    } catch (err: any) {
     console.log(err);
    console.log(err.response?.data);
    alert(err.response?.data?.message || "Signup failed ❌");
}
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-md border min-w-48 p-8">
        <Input ref={usernameRef} placeholder="Username" />
        <Input ref={passwordRef} placeholder="Password" />

        <div className="flex justify-center pt-4">
          <Button
            variant="secondary"
            size="md"
            text="SignUp"
            onClick={signup}
          />
        </div>
      </div>
    </div>
  );
}