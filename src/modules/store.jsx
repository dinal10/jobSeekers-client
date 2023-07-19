import { create } from "zustand";
import { persist } from "zustand/middleware";

const userStore = (set) => ({
  user: {},
  setUser: (newData) => {
    set(() => ({ user: newData }));
  },
});

const jobListStore = (set) => ({
  jobList: [],
  setJobList: (newData) => {
    set(() => ({ jobList: newData }));
  },
});

const jobDetailStore = (set) => ({
  jobDetail: {},
  setJobDetail: (newData) => {
    set(() => ({ jobDetail: newData }));
  },
});

export const useStore = create(
  persist(
    (...a) => ({
      ...userStore(...a),
      ...jobListStore(...a),
      ...jobDetailStore(...a),
    }),
    { name: "bound-store" }
  )
);
