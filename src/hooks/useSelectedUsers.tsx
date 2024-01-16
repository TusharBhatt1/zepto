import { create } from "zustand";
import { UserType } from "../components/Search";

interface useSelectedUsersType {
  selectedUsers: UserType[];
  removeFromSelected: (userName: string) => void;
  addToSelected: (newUser: UserType) => void;
}

const useSelectedUsers = create<useSelectedUsersType>((set) => ({
  selectedUsers: [],
  removeFromSelected: (userName) =>
    set((state) => ({
      selectedUsers: state.selectedUsers.filter(
        (user) => user.userName !== userName
      ),
    })),
  addToSelected: (newUser) =>
    set((state) => ({
      selectedUsers: [...state.selectedUsers, newUser],
    })),
}));

export default useSelectedUsers;
