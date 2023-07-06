import { Controller } from "react-hook-form";
import React from "react";
import usePostItem from "../../hooks/post-item.hook";
import usePageTitle from "../../hooks/page-title.hook";

function CreateArticle() {
  const { control, updateMedias, submit, goBackToFeed, isValid, isLoading } =
    usePostItem();
  usePageTitle({ name: "Crear artículo" });
  return (
    <div className="row mt-3">
      <div className="col col-12 col-lg-8 mx-auto">
        <form onSubmit={submit}>
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Título/descripción"
                  id="item-description"
                  {...field}
                />
                <label htmlFor="item-description">Descripción</label>
              </div>
            )}
          />
          <Controller
            control={control}
            name="price"
            render={({ field }) => (
              <div className="form-floating mb-3">
                <input
                  type="number"
                  min={50}
                  max={1000000}
                  className="form-control"
                  placeholder="Precio"
                  id="item-price"
                  {...field}
                />
                <label htmlFor="item-price">Precio</label>
              </div>
            )}
          />
          <Controller
            control={control}
            name="additionalInfo"
            render={({ field }) => (
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  placeholder="Información adicional"
                  id="item-additional-info"
                  style={{ height: "180px" }}
                  {...field}
                />
                <label htmlFor="item-additional-info">
                  Información adicional
                </label>
              </div>
            )}
          />
          <Controller
            control={control}
            name="bidding"
            render={({ field }) => (
              <div className="mb-3">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="item-bidding"
                    {...field}
                    value=""
                    checked={field.value}
                    onChange={({ target: { checked } }) =>
                      field.onChange(checked)
                    }
                  />
                  <label className="form-check-label" htmlFor="item-bidding">
                    Subastable
                  </label>
                </div>
              </div>
            )}
          />
          <Controller
            control={control}
            name="homeDelivery"
            render={({ field }) => (
              <div className="mb-3">
                <select className="form-select" {...field}>
                  <option value={0}>Sin domicilio</option>
                  <option value={1}>Domicilio incluido</option>
                  <option value={2}>Domicilio con costo adicional</option>
                </select>
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
              className="btn btn-cancel me-2"
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
    </div>
  );
}

export default CreateArticle;
