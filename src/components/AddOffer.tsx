import CommonDlg from "./CommonDlg";
import React, { useRef } from "react";
import usePostOffer from "../hooks/post-offer.hook";
import { Controller } from "react-hook-form";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}
function AddOffer({ isOpen, toggle }: Props) {
  const { control, updateMedias, submit } = usePostOffer();
  const submitRef = useRef<HTMLInputElement>(null);
  const submitForm = () => {
    submitRef.current?.click();
  };
  const form = (
    <form onSubmit={submit}>
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Título para la oferta"
              id="offer-name"
              {...field}
            />
            <label htmlFor="offer-name">Título</label>
          </div>
        )}
      />
      <Controller
        control={control}
        name="initialBid"
        render={({ field }) => (
          <div className="form-floating mb-3">
            <input
              type="number"
              min={50}
              max={1000000}
              className="form-control"
              placeholder="Puja inicial"
              id="offer-initial-bid"
              {...field}
            />
            <label htmlFor="offer-initial-bid">Puja inicial</label>
          </div>
        )}
      />
      <Controller
        control={control}
        name="description"
        render={({ field }) => (
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Descripción de la oferta"
              id="offer-description"
              style={{ height: "180px" }}
              {...field}
            />
            <label htmlFor="offer-description">Descripción</label>
          </div>
        )}
      />
      <div className="mb-3">
        <input
          type="file"
          className="form-control"
          placeholder="Agrega imágenes"
          name="medias"
          accept="image/png, image/jpeg"
          multiple
          onChange={updateMedias}
        />
      </div>
      <input type="submit" hidden ref={submitRef} />
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
      acceptFunction={submitForm}
    />
  );
}

export default AddOffer;
