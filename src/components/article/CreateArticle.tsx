import { Controller } from "react-hook-form";
import React from "react";
import usePostOffer from "../../hooks/post-offer.hook";

function CreateArticle() {
  const { control, updateMedias, submit, goBackToFeed, isValid, isLoading } =
    usePostOffer();
  return (
    <div className="container mt-3">
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
        <div className="text-end">
          <button
            type="reset"
            className="btn me-2"
            disabled={isLoading}
            onClick={goBackToFeed}
          >
            <i className="bi bi-x-circle-fill me-2" />
            Cancelar
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isValid || isLoading}
          >
            <i className="bi bi-check-circle-fill me-2" />
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateArticle;
