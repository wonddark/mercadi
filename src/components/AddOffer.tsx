import CommonDlg from "./CommonDlg";
import React from "react";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}
function AddOffer({ isOpen, toggle }: Props) {
  const form = (
    <form>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Título para la oferta"
          name="offer-name"
          id="offer-name"
        />
        <label htmlFor="offer-name">Título</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="number"
          min={50}
          max={1000000}
          className="form-control"
          placeholder="Puja inicial"
          name="offer-initial-bid"
          id="offer-initial-bid"
        />
        <label htmlFor="offer-initial-bid">Puja inicial</label>
      </div>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          placeholder="Descripción de la oferta"
          name="offer-description"
          id="offer-description"
          style={{ height: "180px" }}
        />
        <label htmlFor="offer-description">Descripción</label>
      </div>
      <div className="mb-3">
        <input
          type="file"
          className="form-control"
          placeholder="Agrega imágenes"
          name="offer-files"
          accept="image/png, image/jpeg"
          multiple
        />
      </div>
    </form>
  );
  return (
    <CommonDlg
      isOpen={isOpen}
      toggle={toggle}
      title="Agregar oferta"
      icon={<i className="bi bi-plus-circle-fill me-2" />}
      size="md"
      content={form}
      acceptLabel="Publicar"
    />
  );
}

export default AddOffer;
