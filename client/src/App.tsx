import { useState } from "react";

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
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Original URL:
          <input type="text" value={originalUrl} onChange={handleInputChange} />
        </label>
        <button type="submit" className="bg-red-500">
          Shorten URL
        </button>
      </form>
      {shortenedUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
