import { CopyIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import CopyToClipboardMenubarItem from "./CopyToClipboardMenubarItem";

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
        <a
          href={`${import.meta.env.BASE_URL}api/${shortUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-md text-gray-900 dark:text-white mb-1">
            {shortUrl}
          </p>
        </a>
        <a href={originalUrl} target="_blank" rel="noopener noreferrer">
          <p className="text-xs text-gray-900 dark:text-white mb-1">
            {originalUrl}
          </p>
        </a>
        <p className="text-xs text-gray-500">{`Clicked ${clickCount} time${clickCount === "1" ? "" : "s"}`}</p>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <Button size="icon" variant={"link"} asChild>
          <a href={originalUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon />
          </a>
        </Button>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger asChild>
              <Button size="icon" variant={"outline"}>
                <CopyIcon />
              </Button>
            </MenubarTrigger>
            <MenubarContent>
              <CopyToClipboardMenubarItem
                name="Short URL"
                toCopy={`${import.meta.env.BASE_URL}api/${shortUrl}`}
              />
              <CopyToClipboardMenubarItem
                name="Original URL"
                toCopy={originalUrl}
              />
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </Card>
  );
}

export default ShortenedURLItem;
