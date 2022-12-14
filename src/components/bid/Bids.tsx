import { Link } from "react-router-dom";
import BidsQuickViewPlaceholder from "./BidsQuickViewPlaceholder";
import SidebarBidsBlock from "./SidebarBidsBlock";
import useUserOffers from "../../hooks/user-offers.hook";

function Bids() {
  const { data, isLoading } = useUserOffers({
    itemsPerPage: 3,
    openOffers: true,
  });
  return (
    <div className="container-xxl">
      <Link
        to="/perfil/pujas"
        className="small fw-bold text-muted text-decoration-none fs-6"
      >
        Tus ofertas
      </Link>
      <div className="container-xxl p-0">
        {!isLoading && data ? (
          <SidebarBidsBlock data={data} />
        ) : (
          [1, 2, 3].map((item) => <BidsQuickViewPlaceholder key={item} />)
        )}
      </div>
    </div>
  );
}

export default Bids;
