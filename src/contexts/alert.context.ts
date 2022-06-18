import { createContext } from "react";

interface AlertContextType {
  showAlert: (message: string) => void;
}

export const AlertContext = createContext<AlertContextType>({
  showAlert: (message) => {}
});
