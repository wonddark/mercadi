import {
  usePostMediaMutation,
  usePostOfferMutation,
} from "../state/services/items.endpoints";
import { useForm } from "react-hook-form";
import { POSTOfferParameters } from "../types/offer.types";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
    mode: "onChange",
    resolver: yupResolver(
      yup.object({
        name: yup.string().required(),
        initialBid: yup.number().min(1),
        description: yup.string().min(70).max(255),
      })
    ),
  });
  const [medias, setMedias] = useState([] as any[]);
  const [postOffer, { isLoading }] = usePostOfferMutation();
  const [postMedia, { isLoading: postingMedia }] = usePostMediaMutation();
  const navigate = useNavigate();

  const updateMedias = ({
    target: { files },
  }: ChangeEvent<HTMLInputElement>) => {
    if (files) {
      for (const file of files) {
        setMedias((prevState) => prevState.concat(file));
      }
    }
  };

  const goBackToFeed = () => {
    navigate("/muro");
  };

  const saveOffer = (data: POSTOfferInputs) => {
    data.initialBid = Number(data.initialBid);
    postOffer(data)
      .unwrap()
      .then((res) => {
        if (medias.length > 0) {
          let promises: Promise<any>[] = [];
          for (const media of medias) {
            const formData = new FormData();
            formData.append("file", media);
            formData.append("offer_id", res.id);
            promises = [...promises, postMedia(formData).unwrap()];
          }
          Promise.all(promises).then(() => {
            goBackToFeed();
          });
        } else {
          goBackToFeed();
        }
      });
  };

  const submit = handleSubmit(saveOffer);

  return {
    control,
    updateMedias,
    submit,
    goBackToFeed,
    isValid,
    isLoading: isLoading || postingMedia,
  };
}

export default usePostOffer;
