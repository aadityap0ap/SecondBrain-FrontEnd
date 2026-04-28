import { useState } from "react";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { CreateContentModal } from "./components/ui/CreateContentModal";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

export default function App() {
  const [modalOpen , setModalOpen] = useState(false);
  return (
    <div className="p-4 space-y-6">
      
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false);
      }}/>
      {/* Buttons */}
      <div className="flex items-center justify-end gap-4">
        <Button
          startIcon={<ShareIcon size="md" />}
          variant="secondary"
          size="md"
          text="Share Brain"
        />

        <Button
          onClick={() => {
            setModalOpen(true);
          }}
          startIcon={<PlusIcon size="md" />}
          variant="primary"
          size="md"
          text="Add Content"
        />
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-4 items-start">

        <Card
          type="twitter"
          link="https://twitter.com/Interior/status/1465053672593784834"
          title="First Tweet"
        />

        <Card
          type="youtube"
          link="https://youtu.be/jwZPK4jh5Rw"
          title="DSA tutorial"
        />
      </div>
    </div>
  );
}