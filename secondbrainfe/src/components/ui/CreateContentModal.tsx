import { useState } from "react";
import axios from "axios";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { BACKEND_URL } from "../../config";

type Props = {
  open: boolean;
  onClose: () => void;
};

type ContentType = "youtube" | "tweet" | "instagram" | "linkedin";

export function CreateContentModal({ open, onClose }: Props) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState<ContentType>("youtube");

  async function submit() {
    try {
      await axios.post(
        `${BACKEND_URL}/content`,
        {
          title,
          link,
          type,
          tags: ["default"],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      onClose();
    } catch (err) {
      console.error(err);
    }
  }

  if (!open) return null;

  return (
    <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 bg-opacity-60 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-80">
        
        {/* Close button */}
        <div className="flex justify-end">
          <div onClick={onClose} className="cursor-pointer">
            <CrossIcon />
          </div>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-2">
          <input
            className="border p-2 rounded"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="border p-2 rounded"
            placeholder="Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />

          {/* ✅ Platform Selection */}
          <div className="flex flex-col gap-2 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={type === "youtube"}
                onChange={() => setType("youtube")}
              />
              YouTube
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={type === "tweet"}
                onChange={() => setType("tweet")}
              />
              Twitter
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={type === "instagram"}
                onChange={() => setType("instagram")}
              />
              Instagram
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={type === "linkedin"}
                onChange={() => setType("linkedin")}
              />
              LinkedIn
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center mt-4">
          <Button
            variant="primary"
            text="Submit"
            size="md"
            onClick={submit}
          />
        </div>
      </div>
    </div>
  );
}