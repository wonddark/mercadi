import {
  usePostMediaMutation,
  usePostOfferMutation,
} from "../state/services/api";
import { useForm } from "react-hook-form";
import { POSTOfferParameters } from "../types/offer.types";
import { ChangeEvent, useState } from "react";

type POSTOfferInputs = POSTOfferParameters;
function usePostOffer() {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<POSTOfferInputs>({
    defaultValues: {
      name: "",
      initialBid: NaN,
      description: "",
    },
  });
  const [medias, setMedias] = useState([] as any[]);
  const [postOffer, { isLoading }] = usePostOfferMutation();
  const [postMedia, { isLoading: postingMedia }] = usePostMediaMutation();

  const updateMedias = ({
    target: { files },
  }: ChangeEvent<HTMLInputElement>) => {
    if (files) {
      for (const file of files) {
        setMedias((prevState) => prevState.concat(file));
      }
    }
  };

  const saveOffer = (data: POSTOfferInputs) => {
    data.initialBid = Number(data.initialBid);
    postOffer(data)
      .unwrap()
      .then((res) => {
        for (const media of medias) {
          const formData = new FormData();
          formData.append("file", media);
          formData.append("offer_id", res.id);
          postMedia(formData);
        }
      });
  };

  const submit = handleSubmit(saveOffer);

  return {
    control,
    updateMedias,
    submit,
    isValid,
    isLoading: isLoading || postingMedia,
  };
}

export default usePostOffer;
