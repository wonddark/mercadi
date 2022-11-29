import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function useConfirmRegistration() {
  const [validationId, setValidationId] = useState("");
  const updateValidationId = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValidationId(value);
  };
  const navigate = useNavigate();
  const submitValidation = () => {
    navigate(`/registro/activar/${validationId}`);
  };

  return { validationId, updateValidationId, submitValidation };
}

export default useConfirmRegistration;
