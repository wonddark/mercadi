import { ChangeEvent, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRegisterMutation } from "../state/services/api";
import { useNavigate } from "react-router-dom";

function useRegister(callback: () => void) {
  const formRef = useRef<HTMLInputElement>(null);
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      password_confirm: "",
    },
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();
  const [queryRegister, { isLoading }] = useRegisterMutation();
  const register = (data: any) => {
    queryRegister({
      name: data.name,
      email: data.email,
      lastname: data.lastname,
      password: data.password,
    })
      .unwrap()
      .then((res) => {
        callback();
        navigate("/registration/confirm");
      })
      .catch((e) => callback());
  };
  const submitForm = () => {
    formRef.current && formRef.current.click();
  };
  const toggleTermsAccepted = ({
    target: { checked },
  }: ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(checked);
  };
  const registerForm = (
    <form onSubmit={handleSubmit(register)} method="post">
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <div className="form-floating mb-3">
            <input
              type="text"
              placeholder="Nombre"
              id="user-first-name"
              className="form-control"
              disabled={isLoading}
              {...field}
            />
            <label htmlFor="user-first-name">Nombre</label>
          </div>
        )}
      />
      <Controller
        name="lastname"
        control={control}
        render={({ field }) => (
          <div className="form-floating mb-3">
            <input
              type="text"
              placeholder="Apellidos"
              id="user-last-name"
              className="form-control"
              disabled={isLoading}
              {...field}
            />
            <label htmlFor="user-last-name">Apellidos</label>
          </div>
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <div className="form-floating mb-3">
            <input
              type="email"
              placeholder="Correo electrónico"
              id="user-email"
              className="form-control"
              disabled={isLoading}
              {...field}
            />
            <label htmlFor="user-email">Correo electrónico</label>
          </div>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <div className="form-floating mb-3">
            <input
              type="password"
              placeholder="Contraseña"
              id="user-password"
              className="form-control"
              disabled={isLoading}
              {...field}
            />
            <label htmlFor="user-password">Contraseña</label>
          </div>
        )}
      />
      <Controller
        name="password_confirm"
        control={control}
        render={({ field }) => (
          <div className="form-floating mb-3">
            <input
              type="password"
              placeholder="Confirmar contraseña"
              id="user-password-confirm"
              className="form-control"
              disabled={isLoading}
              {...field}
            />
            <label htmlFor="user-password-confirm">Confirmar</label>
          </div>
        )}
      />
      <div className="form-check mb-3">
        <input
          type="checkbox"
          id="accept-terms"
          className="form-check-input"
          name="accept-terms"
          checked={termsAccepted}
          onChange={toggleTermsAccepted}
          disabled={isLoading}
        />
        <label htmlFor="accept-terms" className="form-check-label">
          Al registrarte en este sitio aceptas nuestros términos y condiciones
        </label>
      </div>
      <input type="submit" hidden ref={formRef} />
    </form>
  );
  return { registerForm, submitForm, termsAccepted, isValid, isLoading };
}

export default useRegister;
