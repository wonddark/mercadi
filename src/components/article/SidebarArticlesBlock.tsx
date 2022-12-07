import OfferQuickView from "./OfferQuickView";

function SidebarArticlesBlock({ data }: { data: any }) {
  return (
    <>
      {data["hydra:member"].length > 0 ? (
        data["hydra:member"].map(
          (item: {
            id: string;
            name: string;
            currentBid: string;
            highestBid: any;
          }) => (
            <OfferQuickView
              id={item.id}
              name={item.name}
              key={item.id}
              highestBid={item.highestBid.quantity}
            />
          )
        )
      ) : (
        <div className="card card-body mt-2">
          <span className="text-center display-1 fs-4 mb-1 text-primary">
            No tienes ningún artículo
          </span>
          <span>
            Publica lo que sea que quieras vender y nuestra comunidad te dirá
            cuánto está dispuesta a pagar
          </span>
        </div>
      )}
    </>
  );
}

export default SidebarArticlesBlock;
