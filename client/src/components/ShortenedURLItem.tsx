import { CopyIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export interface ShortenedURLItemType {
  shortUrl: string;
  clickCount: string;
  originalUrl: string;
}

function ShortenedURLItem({
  clickCount,
  originalUrl,
  shortUrl,
}: ShortenedURLItemType) {
  return (
    <Card
      key={shortUrl}
      className="flex items-center justify-between  p-4 rounded-md shadow-lg"
    >
      <div>
        <p className="text-md text-gray-900 dark:text-white mb-1">{shortUrl}</p>
        <p className="text-xs text-gray-900 dark:text-white mb-1">
          {originalUrl}
        </p>
        <p className="text-xs text-gray-500">{`Clicked ${clickCount} time${clickCount === "1" ? "" : "s"}`}</p>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <Button size="icon" variant={"link"} asChild>
          <a href={originalUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon />
          </a>
        </Button>
        <Button size="icon" variant={"outline"}>
          <CopyIcon />
        </Button>
      </div>
    </Card>
  );
}

export default ShortenedURLItem;