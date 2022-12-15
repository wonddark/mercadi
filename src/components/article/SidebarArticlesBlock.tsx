import OfferQuickView from "./OfferQuickView";
import SidebarNoArticles from "./SidebarNoArticles";

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
        <SidebarNoArticles />
      )}
    </>
  );
}

export default SidebarArticlesBlock;
