import URLInputForm from "./components/URLInputForm";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-svh bg-neutral-500 p-8">
      <Card className="flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-semibold text-black mb-6">
          URL Shortener
        </h1>
        <URLInputForm />
        <div className="w-full max-w-lg mt-8">
          <h2 className="text-lg font-medium text-black mb-4">
            All Shortened URLs
          </h2>
          <div className="space-y-4">
            {/* {shortenedUrl && (
              <a
                href={shortenedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gray-100 p-4 rounded-md"
              >
                <div>
                  <p className="text-sm text-gray-900 mb-1">
                    {shortenedUrl}
                  </p>
                  <p className="text-xs text-gray-500">Clicked 999999 times</p>
                </div>
                <Button size="sm" variant="ghost">
                  Copy
                </Button>
              </a>
            )} */}
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
      </Card>
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
