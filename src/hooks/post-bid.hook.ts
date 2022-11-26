import { useForm } from "react-hook-form";
import { usePostBidMutation } from "../state/services/api";
import { BidInputs } from "../types/bid.types";

function usePostBid({
  offerId,
  successCallback,
}: {
  offerId: string;
  successCallback: () => void;
}) {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<BidInputs>({
    defaultValues: {
      offer: offerId,
      quantity: "",
    },
  });

  const [postBid, { isLoading }] = usePostBidMutation();

  const saveBid = (data: BidInputs) => {
    data.quantity = Number(data.quantity);
    postBid(data)
      .unwrap()
      .then(() => successCallback());
  };
  const onSubmit = handleSubmit(saveBid);

  return { onSubmit, control, isValid, isLoading };
}

export default usePostBid;
