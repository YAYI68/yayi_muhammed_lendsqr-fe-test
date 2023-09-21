import { create } from "zustand";

type Store = {
  page: number;
  offset: number;
  totalPages: number;
  changePage: (page: number) => void;
  setTotalPages: (total: number) => void;
};

const usePaginate = create<Store>((set) => ({
  page: 1,
  offset: 0,
  totalPages: 1,
  changePage: (page) =>
    set((state) => ({ page: (state.page = page), offset: (page - 1) * 10 })),
  setTotalPages: (total: number) =>
    set((state) => ({
      totalPages: (state.totalPages = Math.ceil(total / 10)),
    })),
}));

export default usePaginate;
