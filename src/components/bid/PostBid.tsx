import CommonDlg from "../common/CommonDlg";
import { useRef } from "react";
import usePostBid from "../../hooks/post-bid.hook";
import { Controller } from "react-hook-form";

type Props = {
  offerId: string;
  highestBid: number;
  isOpen: boolean;
  toggle: () => void;
};

function PostBid({ offerId, highestBid, isOpen, toggle }: Props) {
  const { onSubmit, control, isValid, isLoading } = usePostBid({
    offerId,
    highestBid,
    successCallback: toggle,
  });
  const submitRef = useRef<HTMLInputElement>(null);
  const content = () => (
    <>
      <p className="lead">
        Las ofertas para este artículo comienzan en{" "}
        <strong>${highestBid}</strong>
      </p>
      <form onSubmit={onSubmit}>
        <Controller
          name="quantity"
          control={control}
          render={({ field }) => (
            <input
              type="number"
              className="form-control form-control-lg"
              {...field}
            />
          )}
        />
        <input type="submit" hidden ref={submitRef} />
      </form>
    </>
  );
  const postBid = () => {
    submitRef.current?.click();
  };
  return (
    <CommonDlg
      isOpen={isOpen}
      toggle={toggle}
      title="Haz tu oferta"
      content={content()}
      acceptLabel="Publicar"
      acceptFunction={postBid}
      acceptIcon={<i className="bi bi-check-circle-fill me-2" />}
      acceptDisabled={!isValid || isLoading}
    />
  );
}

export default PostBid;
