import { ShareIcon } from "../../icons/ShareIcon";
import { useEffect } from "react";

interface CardType {
  type: "youtube" | "twitter";
  link: string;
  title: string;
}

const getYoutubeEmbed = (url: string) => {
  if (url.includes("youtu.be")) {
    const id = url.split("/").pop()?.split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  if (url.includes("watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }

  return url;
};

export function Card({ type, link, title }: CardType) {

  const twitterUrl = link.includes("x.com")
    ? link.replace("x.com", "twitter.com")
    : link;

  useEffect(() => {
    if (type === "twitter") {
      // Load Twitter script once
      if (!(window as any).twttr) {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
      } else {
        // Re-render tweets if script already loaded
        (window as any).twttr.widgets.load();
      }
    }
  }, [type, link]);

  return (
    <div className="min-w-72 max-w-72 p-4 bg-white rounded-md shadow-md border border-slate-200">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-700">
          <ShareIcon size="md" />
          <span>{title}</span>
        </div>

        <div className="flex gap-2 text-gray-500">
          <a href={link} target="_blank" rel="noreferrer">
            <ShareIcon size="md" />
          </a>
          <ShareIcon size="md" />
        </div>
      </div>

      {/* Content */}
      <div className="pt-4">

        {/* YouTube */}
        {type === "youtube" && (
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-md"
              src={getYoutubeEmbed(link)}
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        )}

        {/* Twitter */}
        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={twitterUrl}></a>
          </blockquote>
        )}

      </div>
    </div>
  );
}