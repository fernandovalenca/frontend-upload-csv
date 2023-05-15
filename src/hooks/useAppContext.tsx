import { AppContext } from "@/context/appContext";
import { useContext } from "react";

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) throw new Error("You have to use AppContext in your App");

  return context;
};
