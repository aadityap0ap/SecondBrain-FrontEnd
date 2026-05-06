import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { BACKEND_URL } from "../config";
import { Sidebar } from "../components/ui/Sidebar";
import { ProfileIcon } from "../icons/Profile";

type ContentType = "youtube" | "tweet" | "instagram" | "linkedin";

type Content = {
  _id: string;
  type: ContentType;
  link: string;
  title: string;
};

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  // ✅ Logout
  const handleLogout = () => {
    setOpen(false); // close dropdown
    localStorage.removeItem("token");
    navigate("/signin");
  };

  // ✅ Fetch content
  async function fetchContent() {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/signin");
        return;
      }

      const response = await axios.get(`${BACKEND_URL}/content`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // ✅ cleaner filtering
      const allowedTypes: ContentType[] = [
        "youtube",
        "tweet",
        "instagram",
        "linkedin",
      ];

      const filtered: Content[] = response.data.contents.filter(
        (item: any) => allowedTypes.includes(item.type)
      );

      setContents(filtered);
    } catch (err: any) {
      console.error("Error fetching content:", err);

      if (err.response?.status === 403) {
        localStorage.removeItem("token");
        navigate("/signin");
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <div>
      <Sidebar />

      <div className="p-4 ml-72 min-h-screen bg-gray-100 space-y-6">
        {/* Modal */}
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
            fetchContent();
          }}
        />

        {/* Top Buttons */}
        <div className="flex items-center justify-end gap-4">
          <Button
            startIcon={<ShareIcon size="md" />}
            variant="secondary"
            size="md"
            text="Share Brain"
          />

          <Button
            onClick={() => setModalOpen(true)}
            startIcon={<PlusIcon size="md" />}
            variant="primary"
            size="md"
            text="Add Content"
          />

          {/* ✅ Profile Dropdown */}
          <div className="relative">
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer"
            >
              <ProfileIcon />
            </div>

            {open && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow z-50">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <p className="text-gray-600 text-lg">Loading...</p>
        ) : contents.length === 0 ? (
          <p className="text-gray-500 text-lg">
            No content yet. Start adding!
          </p>
        ) : (
          <div className="flex flex-wrap gap-4 items-start">
            {contents.map((item) => (
              <Card
                key={item._id}
                type={item.type}
                link={item.link}
                title={item.title}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}