import { create } from "zustand";

type UserFilterType = {
  organization: string;
  status: string;
  username: string;
  email: string;
  date: string;
  phone_number: string;
};

interface Store extends UserFilterType {
  setFilter: (data: UserFilterType) => void;
  resetFilter: () => void;
}

const initialState = {
  organization: "",
  status: "",
  username: "",
  email: "",
  date: "",
  phone_number: "",
};

const useFilter = create<Store>((set) => ({
  ...initialState,
  setFilter: (data: UserFilterType) => set(() => ({ ...data })),
  resetFilter: () => {
    set(() => ({ ...initialState }));
  },
}));

export default useFilter;
