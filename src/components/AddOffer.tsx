import CommonDlg from "./CommonDlg";
import React from "react";
import { Form, FormGroup, Input } from "reactstrap";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}
function AddOffer({ isOpen, toggle }: Props) {
  const form = (
    <Form>
      <FormGroup>
        <Input placeholder="Título para la oferta" name="offer-name" />
      </FormGroup>
      <FormGroup>
        <Input
          type="number"
          min={50}
          max={1000000}
          placeholder="Puja inicial"
          name="offer-initial-bid"
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="textarea"
          placeholder="Descripción de la oferta"
          name="offer-description"
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="file"
          placeholder="Agrega imágenes"
          name="offer-files"
          accept="image/png, image/jpeg"
          multiple
        />
      </FormGroup>
    </Form>
  );
  return (
    <CommonDlg
      isOpen={isOpen}
      toggle={toggle}
      title="Agregar oferta"
      titleColor="success"
      icon={<i className="bi bi-plus-circle-fill me-2" />}
      size="md"
      content={form}
      acceptLabel="Publicar"
    />
  );
}

export default AddOffer;
