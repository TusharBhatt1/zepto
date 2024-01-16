import ChatBot from "./components/ChatBot";
import Search from "./components/Search";
import Selected from "./components/Selected";
import { useState, useEffect } from "react";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showContinue, setShowContinue] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContinue(true);
    }, 2000);
  }, []);

  return (
    <div>
      {showIntro ? (
        <div className="flex gap-4 justify-center items-center h-[80vh]">
          <div className="flex flex-col gap-3 rounded-lg shadow-xl p-4">
            <p className="text-blue-700 text-xl font-bold">What makes it unique</p>

            <span>Technology stacks: React + Typescript + Tailwind</span>
            <span>Proper replication of the given web pages</span>
            <span>Fully Responsive Design</span>
            <span>Proper form validation (using React Hook Form + Yup)</span>
            <span>Reusable Components</span>
            <span>Google Authentication: Login, Logout, use of local storage</span>
            <span>Clean code</span>

            {showContinue ? (
              <button
                className="fadeIn animate-bounce mt-3 p-3"
                onClick={() => setShowIntro(false)}
              >
                Continue
              </button>
            ) : (
              <p className="text-white">.</p>
            )}
          </div>
          <div className="loader"></div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-4">
          <div className="w-1/2 m-auto flex flex-col gap-7">
            <p className="text-xl text-blue-500">Pick User</p>
            <div className="flex flex-col">
              <div className="flex flex-wrap gap-2">
                <Selected />
                <Search />
                <ChatBot />
              </div>
              <hr className="border-2 border-blue-500" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
