import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default AppLayout;
