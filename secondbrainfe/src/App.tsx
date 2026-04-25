import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

export default function App (){
  return (
    <div className="flex items-center gap-4">
      <Button 
        startIcon={<ShareIcon size="md"/>} 
        variant="secondary" 
        size="md" 
        text="Share Brain" 
      />

      <Button 
        startIcon={<PlusIcon size="md"/>} 
        variant="primary" 
        size="md" 
        text="Add Content" 
      />

      <Card/>
    </div>
      
    
  )
}