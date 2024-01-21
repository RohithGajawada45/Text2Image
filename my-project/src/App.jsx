import { useState } from "react";
import "./App.css"; // Make sure your CSS file path is correct
import Social from "./Social";
import GlitchLoader from "./Glitchloader";

export default function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const [input, setinput] = useState("Ram Mandir Temple");
  const [loading, setloading] = useState(false);

  const query = async (data) => {
    try {
      console.log("Fetching...");
      setloading(true);
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

      console.log("Got the res");
      setloading(false);
      const result = await response.blob();
      const imageUrl = URL.createObjectURL(result);
      setImageSrc(imageUrl);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleButtonClick = () => {
    query({ inputs: input });
  };
  const handleSaveButtonClick = () => {
    // Implement logic to save the image, for example:
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
                Text2Image
              </h1>
            </div>
          </div>
          <Social />
        </div>
      </nav>
      <div className="flex flex-col gap-1 lg:pt-0 pt-12">
        <h1 className=" animate-text bg-gradient-to-r from-pink-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent lg:text-5xl md:text-6xl text-5xl font-black p-1">
          R45 AI
        </h1>
        <h3 className="lg:text-lg md:text-xl text-sm text-neutral-800 dark:text-neutral-200 font-semibold">
  Transform your ideas into
  <span className="text-pink-500 font-bold">  Reality</span>
</h3>
        <br />
        <div className="flex flex-row justify-center items-center gap-10">
          <input
            className="p-3 rounded"
            value={input}
            onChange={(e) => {
              setinput(e.target.value);
            }}
            type="text"
            name=""
            id=""
          />
          <button className="bn29" onClick={handleButtonClick}>Imagine</button>
        </div>
        {loading && (
          <GlitchLoader />
        )}
        {imageSrc && (
          <div className="flex flex-col justify-center items-center p-5 sm:pt-5">
            <img
              className="h-72 hover:scale-105 duration-300 rounded shadow-xl shadow-slate-800 drop-shadow-lg"
              src={imageSrc}
              alt="Fetched Image"
            />
            <button
              className="m-5 z-10 ease-in border-2 border-pink-600"
              onClick={handleSaveButtonClick}
            >
              Save Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
