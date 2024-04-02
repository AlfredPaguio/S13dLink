import { MenubarItem } from "./ui/menubar";

interface CopyToClipboardMenubarItemProps {
  name: string;
  toCopy: string;
}

function CopyToClipboardMenubarItem({
  name,
  toCopy,
}: CopyToClipboardMenubarItemProps) {
  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(toCopy);
      console.log("Code has been copied");
    } catch (error) {
      console.error("Uh oh! Something went wrong.", error);
    }
  };
  return <MenubarItem onSelect={() => handleCopy()}>Copy {name}</MenubarItem>;
}

export default CopyToClipboardMenubarItem;
