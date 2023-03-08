import { createContext } from "react";

interface SidebarType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const sidebar: SidebarType = {
  open: false,
  setOpen: () => {},
};

export const SidebarContext = createContext(sidebar);
