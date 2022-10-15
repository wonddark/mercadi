import CommonDlg from "./CommonDlg";
import React from "react";
import { Form, Input } from "reactstrap";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}
function AddOffer({ isOpen, toggle }: Props) {
  const form = (
    <Form>
      <Input placeholder="Nombre de la oferta" name="offer-name" />
      <Input
        type="number"
        min={50}
        max={1000000}
        placeholder="Puja inicial"
        name="offer-initial-bid"
      />
      <Input
        type="textarea"
        placeholder="Descripción de la oferta"
        name="offer-description"
      />
      <Input
        type="file"
        placeholder="Agrega imágenes"
        name="offer-files"
        accept="image/png, image/jpeg"
        multiple
      />
    </Form>
  );
  return (
    <CommonDlg
      isOpen={isOpen}
      toggle={toggle}
      title="Agregar oferta"
      titleColor="success"
      icon={<i className="bi bi-plus-circle-fill me-2" />}
      size="lg"
      content={form}
      acceptLabel="Publicar"
    />
  );
}

export default AddOffer;
