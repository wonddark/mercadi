import CommonDlg from "../common/CommonDlg";
import useCloseOffer from "../../hooks/close-offer.hook";

interface Props {
  isOpen: boolean;
  toggle: () => void;
  offerId: string;
}
function CloseOffer({ offerId, isOpen, toggle }: Props) {
  const { submit, isLoading } = useCloseOffer({
    offerId,
    successCallback: toggle,
    errorCallback: () => null,
  });
  const message = (
    <p>
      ¿Estás seguro que quieres cerrar esta oferta? Tu artículo se quedará con
      el valor de la última puja
    </p>
  );
  return (
    <CommonDlg
      isOpen={isOpen}
      toggle={toggle}
      title="Cerrar oferta"
      content={message}
      acceptLabel="Cerrar"
      acceptFunction={submit}
      acceptDisabled={isLoading}
    />
  );
}

export default CloseOffer;
