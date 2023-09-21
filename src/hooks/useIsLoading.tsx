import { create } from "zustand";

type Store = {
  isLoading: boolean;
  setIsLoading: (condition: boolean) => void;
};

const useIsLoading = create<Store>((set) => ({
  isLoading: true,
  setIsLoading: (condition) => set(() => ({ isLoading: condition })),
}));

export default useIsLoading;
