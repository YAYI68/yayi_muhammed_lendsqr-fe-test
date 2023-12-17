import { create } from "zustand";

type Store = {
  isAuthenticated: boolean;
  setIsAuthenticated: (authState: boolean) => void;
};

const useAuth = create<Store>((set) => ({
  isAuthenticated: localStorage.getItem("persist")
    ? Boolean(localStorage.getItem("persist"))
    : false,
  setIsAuthenticated: (authState) => {
    if (authState) {
      localStorage.setItem("persist", `${authState}`);
    } else {
      localStorage.removeItem("persist");
    }
    set((state) => ({ isAuthenticated: (state.isAuthenticated = authState) }));
  },
}));

export default useAuth;
