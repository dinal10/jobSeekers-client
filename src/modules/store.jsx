import { create } from "zustand";
import { persist } from "zustand/middleware";

const userStore = (set) => ({
  user: {},
  setUser: (newData) => {
    set(() => ({ user: newData }));
  },
});

export const useStore = create(
  persist(
    (...a) => ({
      ...userStore(...a),
    }),
    { name: "bound-store" }
  )
);
