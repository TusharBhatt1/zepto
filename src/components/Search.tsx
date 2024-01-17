import { useState } from "react";
import useAllUsers from "../hooks/useAllUsers";
import useSelectedUsers from "../hooks/useSelectedUsers";
import { IoMdClose } from "react-icons/io";

export interface UserType {
  icon: React.ReactNode;
  userName: string;
  email: string;
}
export default function Search() {
  const [showList, setShowList] = useState(false);
  const [query, setQuery] = useState("");
  const [onBackSpace, setOnBackspace] = useState(false);

  const { removeFromAllUsers, filterAllUser, filteredUsers, addToAllUsers } =
    useAllUsers();
  const { addToSelected, selectedUsers, removeFromSelected } =
    useSelectedUsers();

  const handleAdd = (user: UserType) => {
    removeFromAllUsers(user.userName);
    addToSelected(user);
    setQuery("");
    filterAllUser("");
  };

  const handleSearch = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    const input = (e as React.ChangeEvent<HTMLInputElement>).target.value;

    if (
      onBackSpace &&
      (e as React.KeyboardEvent<HTMLInputElement>).code === "Backspace"
    ) {
      addToAllUsers(selectedUsers[selectedUsers.length - 1]);
      removeFromSelected(selectedUsers[selectedUsers.length - 1].userName);
      setOnBackspace(false);
      setQuery("");
      filterAllUser("");
      return;
    }

    if (
      input === "" &&
      (e as React.KeyboardEvent<HTMLInputElement>).code === "Backspace"
    ) {
      setQuery(selectedUsers[selectedUsers.length - 1].userName);
      setOnBackspace(true);
      return;
    }

    setQuery(input);
    filterAllUser(input);
  };

  return (
    <div className="relative">
      <input
        value={query}
        placeholder="Add new User"
        onKeyUp={handleSearch}
        onChange={handleSearch}
        className={`${
          onBackSpace && "font-extrabold border-red-300  text-blue-500 bg-black"
        } p-2`}
        onFocus={() => setShowList(true)}
      />
      {onBackSpace && (
        <span
          onClick={() => {
            setQuery("");
            setOnBackspace(false);
          }}
          className="absolute cursor-pointer right-[-20] bottom-7 bg-slate-300 rounded-full"
        >
          <IoMdClose size={15} />
        </span>
      )}

      {showList && (
        <div className="shadow-md absolute max-h-[30vh] overflow-y-auto flex flex-col  border p-2 gap-2 px-4 border-slate-200 mt-2">
          <span
            className=" text-end flex justify-end items-center w-[20px] text-xl hover:cursor-pointer rounded-full"
            onClick={() => setShowList(false)}
          >
            <IoMdClose />
          </span>
          {filteredUsers.length === 0 ? (
            <p className="w-auto">Nothing to select</p>
          ) : (
            filteredUsers.map((user) => (
              <div
                key={user.userName}
                onClick={() => handleAdd(user)}
                className="p-2 flex flex-col sm:flex-row justify-between items-center gap-4  hover:cursor-pointer hover:bg-slate-100 rounded-md"
              >
                <div className="flex gap-2 justify-between items-center">
                  <p className="flex-1">{user.icon}</p>
                  <p className=" flex-2 text-sm">{user.userName}</p>
                </div>
                <p className="text-slate-400 text-sm">{user.email}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
