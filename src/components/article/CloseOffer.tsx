import CommonDlg from "../common/CommonDlg";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}
function CloseOffer({ isOpen, toggle }: Props) {
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
    />
  );
}

export default CloseOffer;
