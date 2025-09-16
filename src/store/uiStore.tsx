import { create } from "zustand";

type UiStore = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  navbarDropdown: boolean;
  toggleNavbarDropdown: () => void;
  closeAllDropdowns: () => void;
};

export const useUiStore = create<UiStore>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  
  navbarDropdown: false,
  toggleNavbarDropdown: () => set((state) => ({ navbarDropdown: !state.navbarDropdown })),
  closeAllDropdowns: () => set({ navbarDropdown: false }),
}));