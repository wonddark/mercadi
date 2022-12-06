import { useForm } from "react-hook-form";
import { usePostBidMutation } from "../state/services/bids.endpoints";
import { BidInputs } from "../types/bid.types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Props = {
  offerId: string;
  highestBid: number;
  successCallback: () => void;
};
function usePostBid({ offerId, highestBid, successCallback }: Props) {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<BidInputs>({
    defaultValues: {
      offer: offerId,
      quantity: "",
    },
    mode: "onChange",
    resolver: yupResolver(
      yup.object({
        offer: yup.string().required(),
        quantity: yup.number().required().min(highestBid),
      })
    ),
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
