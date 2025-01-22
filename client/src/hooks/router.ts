import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Pages } from "../router";

export const useAppRouter = () => {
  const navigate = useNavigate();

  // navigate
  const appNavigate = useCallback((to: keyof typeof Pages) => {
    navigate(Pages[to]);
  }, []);

  return { appNavigate };
};
