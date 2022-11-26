import PostBid from "./PostBid";
import useToggleOpen from "../../hooks/toggle-open.hooks";

function PostBidBtn({
  offerId,
  initialBid,
}: {
  offerId: string;
  initialBid: number;
}) {
  const { isOpen, toggleIsOpen } = useToggleOpen();
  return (
    <>
      <button className="btn btn-primary" onClick={toggleIsOpen}>
        <i className="bi bi-flag-fill me-2" />
        Haz tu oferta
      </button>
      {isOpen && (
        <PostBid
          offerId={offerId}
          isOpen={isOpen}
          toggle={toggleIsOpen}
          initialBid={initialBid}
        />
      )}
    </>
  );
}

export default PostBidBtn;
