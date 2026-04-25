import { ShareIcon } from "../../icons/ShareIcon";

export function Card() {
  return (
    <div className="p-4 bg-white rounded-md shadow-md border border-slate-200 max-w-72">
      
      <div className="flex items-center justify-between w-full gap-12">
        
        {/* Left side */}
        <div className="flex items-center gap-2 text-md text-gray-700">
          <ShareIcon size="md" />
          <span>Project ideas</span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 text-gray-500">
          <ShareIcon size="md" />
          <ShareIcon size="md" />
        </div>

      </div>
    </div>
  );
}