import ChatBot from "./components/ChatBot";
import Search from "./components/Search";
import Selected from "./components/Selected";
import { useState, useEffect } from "react";
import useSelectedUsers from "./hooks/useSelectedUsers";
import { userArray } from "./assets/Users";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showContinue, setShowContinue] = useState(false);
  const { selectedUsers } = useSelectedUsers();

  const uniquePoints = [
    "Technology stacks: React + Typescript + Tailwind",
    "Zustand for State Management",
    "Proper replication of the given web page",
    "Fully Responsive Design",
    "Custom Hooks",
    "Clean code and Best Practices",
  ];

  useEffect(() => {
    setTimeout(() => {
      setShowContinue(true);
    }, 1000);
  }, []);

  return (
    <div>
      {showIntro ? (
        <div className="flex gap-4 justify-center items-center h-[90vh]">
          <div className="flex flex-col gap-2 md:gap-7 rounded-lg shadow-xl p-4">
            <p className="text-black text-xl font-bold">What makes it unique</p>
            {uniquePoints.map((point) => (
              <span>{point}</span>
            ))}
            <p className="font-extrabold text-2xl text-blue-700">
              By Tushar Bhatt
            </p>
            {showContinue ? (
              <button
                className=" hover:bg-blue-500 hover:text-white hover:border-blue-500 animate-bounce mt-7 p-3 border border-blue-700 rounded-xl"
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
        <div className="flex flex-col h-[90vh] items-center justify-between p-4 mt-4">
          <div className="w-full sm:w-1/2 flex flex-col gap-7">
            <p className="text-xl font-bold text-blue-500">
              Pick User{" "}
              {selectedUsers.length > 0 && (
                <span className="text-sm text-slate-400">
                  {" "}
                  ({selectedUsers.length} of {userArray.length})
                </span>
              )}
            </p>
            <div className="flex flex-col">
              <div className="flex flex-wrap gap-2">
                <Selected />
                <Search />
                <ChatBot />
              </div>
              <hr className="border-2 border-blue-500" />
            </div>
          </div>
          <div className="text-start">
            <p className="font-bold">
              * Also Implemented additional Backspace feature *
            </p>
            <div className="text-slate-400 flex flex-col mt-2 gap-2">
            <span>
              Pressing backspace when field is empty <br/> shows the recently added
              item.
            </span>
            <span>Again backspace will remove that item from selected.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
