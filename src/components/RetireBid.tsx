import CommonDlg from "./CommonDlg";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}
function RetireBid({ isOpen, toggle }: Props) {
  const message = (
    <>
      <p>
        ¿Estás seguro que quieres retirar esta puja?. Si lo que quieres es subir
        tu puja solo necesitas pujar una nueva cantidad.
      </p>
    </>
  );
  return (
    <CommonDlg
      isOpen={isOpen}
      toggle={toggle}
      title="Retirar puja"
      content={message}
      acceptLabel="Retirar"
      acceptIcon={<i className="bi bi-door-open-fill me-2" />}
    />
  );
}

export default RetireBid;
