import { useState } from "react";
import "./App.css"; // Make sure your CSS file path is correct
import Social from "./Social";
import YourLoader from "./YourLoader";

export default function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const [input, setInput] = useState("Ram Mandir Temple");
  const [loading, setLoading] = useState(false);

  const query = async (data) => {
    try {
      console.log("Fetching...");
      setLoading(true);
      const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
        {
          headers: {
            Authorization: "Bearer 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",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      console.log("Got the response");
      const result = await response.blob();
      const imageUrl = URL.createObjectURL(result);
      setImageSrc(imageUrl);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    query({ inputs: input });
  };

  const handleSaveButtonClick = () => {
    const a = document.createElement("a");
    a.href = imageSrc;
    a.download = "image.jpg";
    a.click();
  };

  return (
    <div>
      <nav className="bg-transparent">
        <div className="max-w-screen-xl flex items-start justify-between mx-auto p-4">
          <div className="flex items-center">
            <div className="ml-2">
              <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                R45 AI
              </h1>
            </div>
          </div>
          <Social />
        </div>
      </nav>
      <div className="flex flex-col gap-1 lg:pt-0 pt-12">
        <h1 className="animate-text bg-gradient-to-r from-pink-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent lg:text-5xl md:text-6xl text-5xl font-black p-1">
          Text2Image
        </h1>
        <h3 className="lg:text-lg md:text-xl text-sm text-neutral-800 dark:text-neutral-200 font-semibold">
          Transform your ideas into
          <span className="text-pink-500 font-bold"> Reality</span>
        </h3>
        <br />
        <div className="flex flex-row justify-center items-center gap-10">
          <input
            className="p-3 rounded"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            name=""
            id=""
          />
          <button className="bn29" onClick={handleButtonClick}>
            Imagine
          </button>
        </div>
        {loading && <YourLoader />}
        {!loading && imageSrc && (
          <div className="flex flex-col justify-center items-center p-5 sm:pt-5">
            <img
              className="h-72 hover:scale-105 duration-300 rounded shadow-xl shadow-slate-800 drop-shadow-lg"
              src={imageSrc}
              alt="Fetched Image"
            />
            <button className="btn" style={{ marginBottom: "90px" }} onClick={handleSaveButtonClick}>
              <svg
                height="24"
                width="24"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                className="sparkle"
              >
                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
              </svg>
              <span className="text">Download</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
