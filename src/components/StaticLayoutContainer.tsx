import { Outlet } from "react-router-dom";
import SiteLayout from "./SiteLayout";

function StaticLayoutContainer() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}

export default StaticLayoutContainer;
