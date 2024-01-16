import useAllUsers from '../hooks/useAllUsers'
import useSelectedUsers from '../hooks/useSelectedUsers'
import { UserType } from './Search'
import {IoMdClose} from "react-icons/io"

export default function Selected() {
    const {selectedUsers}=useSelectedUsers()
    const {removeFromSelected}=useSelectedUsers()
    const {addToAllUsers}=useAllUsers()
    
    const handleRemove=(user:UserType)=>{
        removeFromSelected(user.userName)
        addToAllUsers(user)
    }
  return (
    <div>
        <div className='flex gap-4 flex-wrap'>
            {selectedUsers.map((user)=>(
                <div className='flex items-center gap-2 p-2 bg-slate-100 rouded-lg'>
                   <span>{user.icon}</span> {user.userName}
                   <span className='text-xl hover:cursor-pointer hover:bg-slate-300 rounded-full' onClick={()=>handleRemove(user)}><IoMdClose/></span>
                </div>
            ))}
        </div>
    </div>
  )
}
