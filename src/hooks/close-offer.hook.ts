import { useCloseOfferMutation } from "../state/services/offers.endpoints";

function useCloseOffer({
  offerId,
  successCallback,
  errorCallback,
}: {
  offerId: string;
  successCallback: () => void;
  errorCallback: () => void;
}) {
  const [closeOffer, { isLoading }] = useCloseOfferMutation();
  const submit = () => {
    closeOffer(offerId)
      .unwrap()
      .then(() => successCallback())
      .catch(() => errorCallback());
  };
  return { submit, isLoading };
}

export default useCloseOffer;
