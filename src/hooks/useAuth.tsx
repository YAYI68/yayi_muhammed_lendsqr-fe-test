import { create } from "zustand";

type Store = {
  isAuthenticated: boolean;
  setIsAuthenticated: (authState: boolean) => void;
};

const useAuth = create<Store>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (authState) =>
    set((state) => ({ isAuthenticated: (state.isAuthenticated = authState) })),
}));

export default useAuth;
