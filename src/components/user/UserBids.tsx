import HeaderBid from "../bid/HeaderBid";
import RowBid from "../bid/RowBid";
import useUserOffers from "../../hooks/user-offers.hook";
import RowBidPlaceholder from "../bid/RowBidPlaceholder";
import usePageTitle from "../../hooks/page-title.hook";

function UserBids() {
  const { data, isLoading } = useUserOffers({});
  usePageTitle({ name: "Mis ofertas", loading: isLoading });
  return (
    <>
      <HeaderBid />
      <div
        className="pe-1"
        style={{
          height: "calc(65vh)",
          overflow: "auto",
        }}
      >
        {!isLoading ? (
          data["hydra:member"].map((item: any) => (
            <RowBid item={item} key={item.id} />
          ))
        ) : (
          <>
            {[1, 2, 3, 4, 5].map((item) => (
              <RowBidPlaceholder key={item} />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default UserBids;
