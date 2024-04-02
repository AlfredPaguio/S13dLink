import ShortenedURLList from "./components/ShortenedURLList";
import URLInputForm from "./components/URLInputForm";
import { Card } from "./components/ui/card";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen min-h-screen max-h-screen bg-neutral-500 p-8 overflow-scroll">
      <Card className="flex flex-col items-center justify-center p-6 w-1/2">
        <h1 className="text-2xl font-semibold text-black mb-6">
          URL Shortener
        </h1>
        <URLInputForm />
        <div className="w-full max-w-lg mt-8">
          <h2 className="text-lg font-medium text-black mb-4">
            All Shortened URLs
          </h2>
          <ShortenedURLList />
        </div>
      </Card>
    </div>
  );
}

export default App;
