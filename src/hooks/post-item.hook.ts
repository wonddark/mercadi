import {
  usePostItemMutation,
  usePostMediaMutation,
} from "../state/services/items.endpoints";
import { useForm } from "react-hook-form";
import { POSTItemParameters } from "../types/item.types";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function usePostItem() {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<POSTItemParameters>({
    defaultValues: {
      description: "",
      price: NaN,
      bidding: true,
      contactPhones: [],
      additionalInfo: "",
      homeDelivery: 0,
    },
    mode: "onChange",
    resolver: yupResolver(
      yup.object({
        description: yup.string().required().min(70).max(255),
        price: yup.number().required().min(1),
        bidding: yup.boolean().required(),
        contactPhones: yup.array().required(),
        additionalInfo: yup.string().required(),
        homeDelivery: yup.number().required().oneOf([0, 1, 2]),
      }),
    ),
  });
  const [medias, setMedias] = useState([] as any[]);
  const [postItem, { isLoading }] = usePostItemMutation();
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

  const saveItem = (data: POSTItemParameters) => {
    postItem(data)
      .unwrap()
      .then((res) => {
        if (medias.length > 0) {
          let promises: Promise<any>[] = [];
          for (const media of medias) {
            const formData = new FormData();
            formData.append("file", media);
            formData.append("item_id", res.id);
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

  const submit = handleSubmit(saveItem);

  return {
    control,
    updateMedias,
    submit,
    goBackToFeed,
    isValid,
    isLoading: isLoading || postingMedia,
  };
}

export default usePostItem;
