import RetireBid from "./RetireBid";
import useToggleOpen from "../../hooks/toggle-open.hooks";

function RetireBidBtn({ bidId }: { bidId: string }) {
  const { isOpen, toggleIsOpen } = useToggleOpen();
  return (
    <>
      <i
        className="bi bi-x-circle-fill text-danger fs-6"
        onClick={toggleIsOpen}
        title="Retirar oferta"
        style={{ cursor: "pointer" }}
      />
      {isOpen && (
        <RetireBid isOpen={isOpen} toggle={toggleIsOpen} bidId={bidId} />
      )}
    </>
  );
}

export default RetireBidBtn;
