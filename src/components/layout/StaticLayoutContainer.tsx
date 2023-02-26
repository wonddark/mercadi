import { Outlet } from "react-router-dom";
import SiteLayout from "./SiteLayout";
import { useSelector } from "react-redux";
import { selectPageTitle } from "../../state/slices/page-title.slice";

function StaticLayoutContainer() {
  document.title = useSelector(selectPageTitle);
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}

export default StaticLayoutContainer;
