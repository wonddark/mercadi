import RowOffer from "../article/RowOffer";
import HeaderOffer from "../article/HeaderOffer";
import { pageTitle } from "../../helpers/page-title.helper";
import useUserArticles from "../../hooks/user-articles.hook";
import RowOfferPlaceholder from "../article/RowOfferPlaceholder";

function UserOffers() {
  const { data, isLoading } = useUserArticles({
    itemsPerPage: 30,
    open: null,
  });
  pageTitle("Artículos");
  return (
    <>
      <HeaderOffer />
      <div
        className="pe-1"
        style={{
          height: "calc(65vh)",
          overflow: "auto",
        }}
      >
        {!isLoading
          ? data["hydra:member"].map((item: any) => (
              <RowOffer item={item} key={item.id} />
            ))
          : [1, 2, 3, 4, 5].map((item) => <RowOfferPlaceholder key={item} />)}
      </div>
    </>
  );
}

export default UserOffers;
