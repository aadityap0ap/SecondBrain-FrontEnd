import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100 gap-6">
      <div className="bg-white rounded-md border min-w-48 min-h-50 p-8 flex flex-col items-center">
        <div className="pb-4">
          <h1 className="text-3xl font-bold">
        Welcome to Second Brain
      </h1>

        </div>
         
      <div className="flex gap-4">
        <Button
          variant="primary"
          size="md"
          text="Sign In"
          onClick={() => navigate("/signin")}
        />

        <Button
          variant="secondary"
          size="md"
          text="Sign Up"
          onClick={() => navigate("/signup")}
        />
      </div>
      </div>
     

    </div>
  );
}