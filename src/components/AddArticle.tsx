import CommonDlg from "./CommonDlg";
import React from "react";
import { Form, Input } from "reactstrap";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}
function AddArticle({ isOpen, toggle }: Props) {
  const form = (
    <Form>
      <Input placeholder="Nombre del artículo" name="article-name" />
      <Input
        type="number"
        min={50}
        max={1000000}
        placeholder="Oferta inicial"
        name="article-initial-offer"
      />
      <Input
        type="textarea"
        placeholder="Descripción del artículo"
        name="article-description"
      />
    </Form>
  );
  return (
    <CommonDlg
      isOpen={isOpen}
      toggle={toggle}
      title="Agregar artículo"
      titleColor="success"
      icon={<i className="bi bi-plus-circle-fill me-2" />}
      size="lg"
      content={form}
      acceptLabel="Publicar"
    />
  );
}

export default AddArticle;
