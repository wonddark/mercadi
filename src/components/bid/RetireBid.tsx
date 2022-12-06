import CommonDlg from "../common/CommonDlg";
import { useDeleteBidMutation } from "../../state/services/bids.endpoints";

interface Props {
  isOpen: boolean;
  toggle: () => void;
  bidId: string;
}
function RetireBid({ isOpen, toggle, bidId }: Props) {
  const [deleteBid, { isLoading }] = useDeleteBidMutation();
  const message = (
    <>
      <p>
        ¿Estás seguro que quieres retirar esta puja?. Si lo que quieres es subir
        tu puja solo necesitas pujar una nueva cantidad.
      </p>
    </>
  );
  const submitAction = () => {
    deleteBid(bidId)
      .unwrap()
      .then(() => toggle());
  };
  return (
    <CommonDlg
      isOpen={isOpen}
      toggle={toggle}
      title="Retirar puja"
      content={message}
      acceptLabel="Retirar"
      acceptIcon={<i className="bi bi-door-open-fill me-2" />}
      acceptFunction={submitAction}
      acceptDisabled={isLoading}
    />
  );
}

export default RetireBid;
