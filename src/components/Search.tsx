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
  const { allUsers ,removeFromAllUsers } = useAllUsers();
  const [list , setList]=useState(allUsers)
  const {addToSelected}=useSelectedUsers()

  const handleAdd=(user:UserType)=>{
   removeFromAllUsers(user.userName)
   addToSelected(user)
  }

  const handleSearch=(e:React.ChangeEvent<HTMLInputElement>)=>{
   const input=e.target.value
    setList(allUsers.filter((user)=>user.userName.toLowerCase().includes(input.toLowerCase())))
  }
  return (
    <div>
      <input placeholder="Add new User" onChange={handleSearch} className="p-2" onFocus={()=>setShowList(true)} />
      { showList && <div className="absolute max-h-[30vh] overflow-y-auto flex flex-col  border-2 p-2 gap-2 px-4 border-slate-200 mt-2">
      <span className=' text-end flex justify-end items-center w-[20px] text-xl hover:cursor-pointer rounded-full' onClick={()=>setShowList(false)}><IoMdClose/></span>
       {  allUsers.length===0 || list.length===0 ? <p className="w-auto">Nothing to select</p>:
        list.map((user) => (
          <div onClick={()=>handleAdd(user)} className="p-2 flex justify-between items-center gap-10 hover:cursor-pointer hover:bg-slate-100 rounded-md">
            <div className="flex">
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
