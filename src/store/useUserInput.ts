import { create } from "zustand";

type UserInputStore = {
  currentInput: string;
  setCurrentInput: (input: string) => void;
  clearCurrentInput: () => void;
};

export const useUserInput = create<UserInputStore>((set) => ({
  currentInput: "",
  setCurrentInput: (input: string) => set({ currentInput: input }),
  clearCurrentInput: () => set({ currentInput: "" }),
}));
