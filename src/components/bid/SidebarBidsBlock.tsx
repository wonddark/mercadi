import BidsQuickView from "./BidsQuickView";

function SidebarBidsBlock(data: any) {
  return (
    <>
      {data.length > 0 ? (
        data["hydra:member"].map(
          (item: {
            id: string;
            quantity: number;
            deletable: boolean;
            offer: { id: string; name: string };
          }) => (
            <BidsQuickView
              key={item.id}
              id={item.id}
              offerId={item.offer.id}
              offerName={item.offer.name}
              userBid={item.quantity}
              isDeletable={item.deletable}
            />
          )
        )
      ) : (
        <div className="card card-body mt-2">
          <span className="text-center display-1 fs-4 mb-1 text-primary">
            No tienes ninguna oferta
          </span>
          <span>
            Encuentra un artículo que te interese y déjales saber cuánto estás
            dispuesto a pagar
          </span>
        </div>
      )}
    </>
  );
}

export default SidebarBidsBlock;
