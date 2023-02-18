import { Outlet } from "react-router-dom";
import SiteLayout from "./SiteLayout";
import { useSelector } from "react-redux";
import { selectPageTitle } from "../../state/slices/page-title.slice";

function StaticLayoutContainer() {
  const pageTitle = useSelector(selectPageTitle);
  document.title = pageTitle;
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}

export default StaticLayoutContainer;
