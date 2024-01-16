import { create } from "zustand";
import { UserType } from "../components/Search";
import { userArray } from "../assets/Users";

interface useAllUsersType {
  allUsers: UserType[];
  removeFromAllUsers: (userName: string) => void;
  addToAllUsers: (newUser: UserType) => void;
}

const useAllUsers = create<useAllUsersType>((set) => ({
  allUsers: userArray,
  removeFromAllUsers: (userName) =>
    set((state) => ({
      allUsers: state.allUsers.filter((user) => user.userName !== userName),
    })),
  addToAllUsers: (newUser) =>
    set((state) => ({
      allUsers: [...state.allUsers, newUser],
    })),
}));

export default useAllUsers;
