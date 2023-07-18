import { Controller } from "react-hook-form";
import React from "react";
import usePostItem from "../../hooks/post-item.hook";
import usePageTitle from "../../hooks/page-title.hook";

function CreateArticle() {
  const {
    control,
    fields,
    append,
    remove,
    updateMedias,
    submit,
    goBackToFeed,
    isValid,
    isLoading,
  } = usePostItem();
  usePageTitle({ name: "Crear artículo" });
  return (
    <div className="row mt-3">
      <div className="col col-12 col-lg-8 mx-auto">
        <form onSubmit={submit} noValidate>
          <Controller
            control={control}
            name="description"
            render={({ field, fieldState: { invalid, error } }) => (
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control${invalid ? " is-invalid" : ""}`}
                  placeholder="Título/descripción"
                  id="item-description"
                  {...field}
                />
                <label htmlFor="item-description">Descripción</label>
                {invalid ? (
                  <div className="invalid-feedback">{error?.message}</div>
                ) : null}
              </div>
            )}
          />
          <Controller
            control={control}
            name="price"
            render={({ field, fieldState: { invalid, error } }) => (
              <div className="form-floating mb-3">
                <input
                  type="number"
                  min={50}
                  max={1000000}
                  className={`form-control${invalid ? " is-invalid" : ""}`}
                  placeholder="Precio"
                  id="item-price"
                  {...field}
                />
                <label htmlFor="item-price">Precio</label>
                {invalid ? (
                  <div className="invalid-feedback">{error?.message}</div>
                ) : null}
              </div>
            )}
          />
          <Controller
            control={control}
            name="additionalInfo"
            render={({ field, fieldState: { invalid, error } }) => (
              <div className="form-floating mb-3">
                <textarea
                  className={`form-control${invalid ? " is-invalid" : ""}`}
                  placeholder="Información adicional"
                  id="item-additional-info"
                  style={{ height: "240px" }}
                  {...field}
                />
                <label htmlFor="item-additional-info">
                  Información adicional
                </label>
                {invalid ? (
                  <div className="invalid-feedback">{error?.message}</div>
                ) : null}
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
          <Controller
            control={control}
            name="conditionStatus"
            render={({ field }) => (
              <div className="mb-3">
                <select className="form-select" {...field}>
                  <option value={undefined}>No aplica</option>
                  <option value={0}>Artículo nuevo</option>
                  <option value={1}>De uso sin detalles</option>
                  <option value={2}>De uso con detalles menores</option>
                  <option value={3}>Detalles estéticos pero trabajando</option>
                  <option value={4}>Reparado</option>
                  <option value={5}>Para piezas</option>
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
          <div className="mb-3">
            {fields.map((item, index) => (
              <Controller
                key={item.id}
                control={control}
                render={({ field, fieldState: { invalid, error } }) => (
                  <div key={item.id} className="input-group mb-3">
                    <input
                      type="tel"
                      className={`form-control${invalid ? " is-invalid" : ""}`}
                      placeholder="+5300000000"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      {...field}
                    />
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      type="button"
                      onClick={() => remove(index)}
                    >
                      <i className="bi bi-dash-circle-fill" />
                    </button>
                    {invalid ? (
                      <div className="invalid-feedback">{error?.message}</div>
                    ) : null}
                  </div>
                )}
                name={`contactPhones.${index}.phone`}
              />
            ))}
            <button
              className="btn btn-primary"
              onClick={() => append({ phone: "" })}
            >
              Agregar
            </button>
            <button
              className="btn btn-link text-warning text-decoration-none ms-1"
              onClick={() => remove()}
              disabled={fields.length === 0}
            >
              Quitar todos
            </button>
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
