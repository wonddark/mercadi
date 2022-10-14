import CommonDlg from "./CommonDlg";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}
function CloseOffer({ isOpen, toggle }: Props) {
  const message = <p>¿Estás seguro que quieres cerrar esta oferta?</p>;
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
