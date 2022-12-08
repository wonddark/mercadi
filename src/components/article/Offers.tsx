import { Link } from "react-router-dom";
import OfferQuickViewPlaceholder from "./OfferQuickViewPlaceholder";
import SidebarArticlesBlock from "./SidebarArticlesBlock";
import useUserArticles from "../../hooks/user-articles.hook";

function Offers() {
  const { data, isLoading } = useUserArticles({ itemsPerPage: 3 });
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
