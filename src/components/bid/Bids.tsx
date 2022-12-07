import { Link } from "react-router-dom";
import { useGetBidsPerUserQuery } from "../../state/services/bids.endpoints";
import { useAppSelector } from "../../hooks/state.hooks";
import { selectId } from "../../state/slices/session";
import BidsQuickViewPlaceholder from "./BidsQuickViewPlaceholder";
import SidebarBidsBlock from "./SidebarBidsBlock";

function Bids() {
  const state = useAppSelector((state) => state);
  const userId = selectId(state);
  const { data, isLoading } = useGetBidsPerUserQuery({
    userId,
    itemsPerPage: 3,
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
        {!isLoading ? (
          <SidebarBidsBlock data={data} />
        ) : (
          [1, 2, 3].map((item) => <BidsQuickViewPlaceholder key={item} />)
        )}
      </div>
    </div>
  );
}

export default Bids;
