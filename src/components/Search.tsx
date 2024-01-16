import { useState } from "react";
import useAllUsers from "../hook/useAllUsers";
import useSelectedUsers from "../hook/useSelectedUsers";
import { IoMdClose } from "react-icons/io";

export interface UserType {
  icon: React.ReactNode;
  userName: string;
  email: string;
}
export default function Search() {
 
  const [showList , setShowList]=useState(false)
  const [query , setQuery]=useState("")

  const {removeFromAllUsers ,filterAllUser ,filteredUsers} = useAllUsers();
  const {addToSelected}=useSelectedUsers()

  const handleAdd=(user:UserType)=>{
   removeFromAllUsers(user.userName)
   addToSelected(user)
   setQuery("")
  }

  const handleSearch=(e:React.ChangeEvent<HTMLInputElement>)=>{
   const input=e.target.value
   setQuery(input)
   filterAllUser(input)
  }
  return (
    <div>
      <input value={query} placeholder="Add new User" onChange={handleSearch} className="p-2" onFocus={()=>setShowList(true)} />
      { showList && <div className="shadow-md absolute max-h-[30vh] overflow-y-auto flex flex-col  border p-2 gap-2 px-4 border-slate-200 mt-2">
      <span className=' text-end flex justify-end items-center w-[20px] text-xl hover:cursor-pointer rounded-full' onClick={()=>setShowList(false)}><IoMdClose/></span>
       {  filteredUsers.length===0  ? <p className="w-auto">Nothing to select</p>:
        filteredUsers.map((user) => (
          <div onClick={()=>handleAdd(user)} className="p-2 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-10 hover:cursor-pointer hover:bg-slate-100 rounded-md">
            <div className="flex gap-2">
              <span>{user.icon}</span>
              <p>{user.userName}</p>
            </div>
            <p className="text-slate-400">{user.email}</p>
          </div>
        ))}
        
      </div>
}
    </div>
  );
}
