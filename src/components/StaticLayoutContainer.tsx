import HomePage from "./HomePage";
import { Outlet } from "react-router-dom";

function StaticLayoutContainer() {
  return (
    <>
      <HomePage />
      <Outlet />
    </>
  );
}

export default StaticLayoutContainer;
