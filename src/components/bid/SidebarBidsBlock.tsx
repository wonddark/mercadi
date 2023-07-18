import BidsQuickView from "./BidsQuickView";
import SidebarNoOffers from "./SidebarNoOffers";

function SidebarBidsBlock({ data }: { data: any }) {
  return (
    <>
      {data["hydra:member"].length > 0 ? (
        data["hydra:member"].map(
          (item: {
            id: string;
            quantity: number;
            deletable: boolean;
            offer: { id: string; name: string };
            bids: { highestOffer: number };
          }) => (
            <BidsQuickView
              key={item.id}
              id={item.id}
              offerId={item.offer.id}
              offerDescription={item.offer.name}
              userBid={item.quantity}
              isDeletable={item.deletable}
              bids={item.bids}
            />
          )
        )
      ) : (
        <div className="card card-body mt-2">
          <SidebarNoOffers />
        </div>
      )}
    </>
  );
}

export default SidebarBidsBlock;
