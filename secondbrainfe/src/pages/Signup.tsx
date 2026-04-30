import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export function Signup(){
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-md border min-w-48 p-8">
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
            <div className="flex justify-center pt-4">
                <Button variant="secondary" size="md" text="SignUp"/>
            </div>
          
        </div>
    </div>
}