import { Outlet } from "react-router-dom";
import { useAppRouter } from "./hooks/router";
import { useEffect } from "react";

const App: React.FC = () => {
  const { appNavigate } = useAppRouter();

  useEffect(() => {
    appNavigate("ORDERS");
  }, []);
  return <Outlet />;
};

export default App;
