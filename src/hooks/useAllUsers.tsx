import { create } from "zustand";
import { UserType } from "../components/Search";
import { userArray } from "../assets/Users";

interface useAllUsersType {
  allUsers: UserType[];
  filteredUsers: UserType[];
  filterAllUser: (input: string) => void;
  removeFromAllUsers: (userName: string) => void;
  addToAllUsers: (newUser: UserType) => void;
}

const useAllUsers = create<useAllUsersType>((set) => ({
  allUsers: userArray,
  filteredUsers: userArray,

  filterAllUser: (input) =>
    set((state) => ({
      filteredUsers: input
        ? state.allUsers.filter((user) =>
            user.userName.toLowerCase().includes(input.toLowerCase())
          )
        : state.allUsers,
    })),
  removeFromAllUsers: (userName) =>
    set((state) => ({
      allUsers: state.allUsers.filter((user) => user.userName !== userName),
      filteredUsers: state.filteredUsers.filter(
        (user) => user.userName !== userName
      ),
    })),
  addToAllUsers: (newUser) =>
    set((state) => ({
      allUsers: [ newUser,...state.allUsers,],
      filteredUsers: [newUser,...state.filteredUsers],
    })),
}));

export default useAllUsers;
