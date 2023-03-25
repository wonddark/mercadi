import UserNav from "./UserNav";
import { ReactElement } from "react";

function SiteLayout({ children }: { children: ReactElement | ReactElement[] }) {
  return (
    <div className="container-fluid p-0 h-100">
      <header className="sticky-top">
        <UserNav />
      </header>
      {children}
    </div>
  );
}

export default SiteLayout;
