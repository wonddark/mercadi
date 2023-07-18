import {
  usePostItemMutation,
  usePostMediaMutation,
} from "../state/services/items.endpoints";
import { useFieldArray, useForm } from "react-hook-form";
import { POSTItemParameters } from "../types/item.types";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormValues = Omit<POSTItemParameters, "contactPhones"> & {
  contactPhones: { phone: string }[] | undefined;
};

function usePostItem() {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormValues>({
    defaultValues: {
      description: "",
      price: NaN,
      bidding: true,
      contactPhones: [],
      additionalInfo: "",
      homeDelivery: 0,
      conditionStatus: undefined,
    },
    mode: "onChange",
    resolver: yupResolver(
      yup.object({
        description: yup.string().required().min(8).max(255),
        price: yup.number().required().min(10),
        bidding: yup.boolean().required(),
        contactPhones: yup.array(
          yup.object({
            phone: yup
              .string()
              .matches(/^\+53[0-9]{8}$/, "Por favor introduce un número válido")
              .required(),
          }),
        ),
        additionalInfo: yup.string(),
        homeDelivery: yup.number().required().oneOf([0, 1, 2]),
        conditionStatus: yup.number(),
      }),
    ),
  });
  const { fields, append, remove } = useFieldArray<FormValues>({
    control,
    name: "contactPhones",
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

  const saveItem = (data: FormValues) => {
    const input: POSTItemParameters = {
      ...data,
      contactPhones: data.contactPhones?.map((item) => item.phone) ?? [],
    };
    postItem(input)
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
    fields,
    append,
    remove,
    updateMedias,
    submit,
    goBackToFeed,
    isValid,
    isLoading: isLoading || postingMedia,
  };
}

export default usePostItem;
