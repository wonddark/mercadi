import CommonDlg from "./CommonDlg";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}
function RetireOffer({ isOpen, toggle }: Props) {
  const message = (
    <>
      <p>
        ¿Estás seguro que quieres retirar esta oferta?. Si lo que quieres es
        subir tu oferta solo necesitas pujar una nueva cantidad.
      </p>
    </>
  );
  return (
    <CommonDlg
      isOpen={isOpen}
      toggle={toggle}
      title="Retirar oferta"
      content={message}
      acceptLabel="Retirar"
      acceptIcon={<i className="bi bi-door-open-fill me-2" />}
    />
  );
}

export default RetireOffer;
