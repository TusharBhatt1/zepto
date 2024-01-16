import { useState } from "react";
import { BsFillChatFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

export default function ChatBot() {
  const [showMsg, setShowMsg] = useState(true);

  return (
    <div className=" hidden md:flex fixed right-20 bottom-20 flex-col gap-2 items-end">
      {showMsg && (
        <div className="relative bg-white border border-black rounded-xl px-7 py-4">
          <p>
            Hi there.👋 Do you need help ? <br />
            <div className="flex flex-col gap-2 text-slate-400 mt-2 text-sm">
              <span> Code : https://github.com/TusharBhatt1/zepto</span>
              <span>Mail : tusharbhatt0135@gmail.com</span>
              <span>Contact : 7617446649</span>
            </div>
          </p>
          <p
            onClick={() => setShowMsg(false)}
            className="absolute right-1 top-1 bg-slate-200 cursor-pointer rounded-full"
          >
            <IoClose size={18} />
          </p>
        </div>
      )}
      <div
        onClick={() => setShowMsg(true)}
        className="text-white p-2 bg-blue-600 rounded-full"
      >
        <BsFillChatFill size={32} />
      </div>
    </div>
  );
}
