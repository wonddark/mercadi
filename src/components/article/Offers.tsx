import { Link } from "react-router-dom";
import { useGetOffersByUserIdQuery } from "../../state/services/offers.endpoints";
import { useAppSelector } from "../../hooks/state.hooks";
import { selectId } from "../../state/slices/session";
import OfferQuickViewPlaceholder from "./OfferQuickViewPlaceholder";
import SidebarArticlesBlock from "./SidebarArticlesBlock";

function Offers() {
  const state = useAppSelector((state) => state);
  const userId = selectId(state);
  const { data, isLoading } = useGetOffersByUserIdQuery({
    userId,
    itemsPerPage: 3,
  });
  return (
    <div className="container-xxl">
      <Link
        to="/perfil/ofertas"
        className="small fw-bold text-muted text-decoration-none fs-6"
      >
        Tus artículos
      </Link>
      <div className="container-xxl p-0">
        {!isLoading ? (
          <SidebarArticlesBlock data={data} />
        ) : (
          <>
            {[1, 2, 3].map((item) => (
              <OfferQuickViewPlaceholder key={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Offers;
