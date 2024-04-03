import { useEffect, useState } from "react";
import ShortenedURLItem, { ShortenedURLItemType } from "./ShortenedURLItem";
import { ScrollArea } from "./ui/scroll-area";

function ShortenedURLList() {
  const [URLs, setURLs] = useState<ShortenedURLItemType[]>([]);

  useEffect(() => {
    async function fetchUrls() {
      try {
        const response = await fetch("/api/list", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setURLs(data);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    }

    fetchUrls();
  }, []);

  return (
    <ScrollArea className="h-[200px] max-w-lg rounded-md shadow-inner p-4 space-y-2">
      {URLs ? (
        <>
          {URLs.map((item) => (
            <ShortenedURLItem {...item} />
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </ScrollArea>
  );
}

export default ShortenedURLList;
