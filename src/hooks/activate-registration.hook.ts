import {
  useActivateRegistrationMutation,
  useCheckRegistrationQuery,
} from "../state/services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function useActivateRegistration() {
  const { registrationId } = useParams();
  const { data, isLoading } = useCheckRegistrationQuery(`${registrationId}`);
  const [activateRegistration, { isLoading: activating }] =
    useActivateRegistrationMutation();

  const [error, setError] = useState("");

  const updateValid = () => {
    if (!isLoading && data) {
      if (!data.active) {
        activateRegistration(`${registrationId}`);
      } else {
        setError("Este registro ya estaba activo");
      }
    } else if (!isLoading && !data) {
      setError("No hemos podido activar tu registro");
    }
  };
  useEffect(
    updateValid,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoading, data]
  );

  return { isLoading: isLoading || activating, error };
}

export default useActivateRegistration;
