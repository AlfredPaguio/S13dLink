import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOriginalUrl(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ originalUrl: originalUrl }),
      });
      const { shortUrl } = await response.json();
      setShortenedUrl(shortUrl);
    } catch (error) {
      console.error("Error creating shortened URL:", error);
    }
  };

  return (
    <div className="w-full h-screen bg-neutral-100 dark:bg-gray-800 p-8">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          URL Shortener
        </h1>
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
            <input
              aria-label="URL input"
              className="block w-full text-lg py-3 px-4 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              type="text"
              placeholder="https://www.example.com"
              value={originalUrl}
              onChange={handleInputChange}
            />
          </div>
          <Button className="w-full mt-4 py-2 rounded-b-md" type="submit">
            Shorten URL
          </Button>
        </form>
        <div className="w-full max-w-md mt-8">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            All Shortened URLs
          </h2>
          <div className="space-y-4">
            {shortenedUrl && (
              <a
                href={shortenedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-md"
              >
                <div>
                  <p className="text-sm text-gray-900 dark:text-white mb-1">
                    {shortenedUrl}
                  </p>
                  <p className="text-xs text-gray-500">Clicked 999999 times</p>
                </div>
                <Button size="sm" variant="ghost">
                  Copy
                </Button>
              </a>
            )}
            <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
              <div>
                <p className="text-sm text-gray-900 dark:text-white mb-1">
                  some.thing/afkan23
                </p>
                <p className="text-xs text-gray-500">Clicked 9999999 times</p>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Button size="sm" variant={"secondary"}>
                  Go
                </Button>
                <Button size="sm" variant={"secondary"}>
                  Copy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <h1>URL Shortener</h1>
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         Original URL:
  //         <input type="text" value={originalUrl} onChange={handleInputChange} />
  //       </label>
  //       <button type="submit" className="bg-red-500">
  //         Shorten URL
  //       </button>
  //     </form>
  //     {shortenedUrl && (
  //       <div>
  //         <p>Shortened URL:</p>
  //         <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
  //           {shortenedUrl}
  //         </a>
  //       </div>
  //     )}
  //   </div>
  // );
}

export default App;
