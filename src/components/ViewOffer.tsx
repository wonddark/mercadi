import { useParams } from "react-router-dom";
import { useGetOfferByIdQuery } from "../state/services/offers.endpoints";
import useGoBack from "../hooks/go-back.hooks";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function ViewOffer() {
  const { offerId } = useParams();
  const { data, isLoading, isError } = useGetOfferByIdQuery(`${offerId}`);
  const { goBackTo: goBackToFeed } = useGoBack("/muro");
  document.title = isLoading ? "Cargando..." : data.name;
  return (
    <div className="container-xxl mt-3">
      <button className="btn btn-secondary" onClick={goBackToFeed}>
        <i className="bi bi-arrow-left-circle-fill" />
      </button>
      {!isLoading ? (
        <div className="mt-4">
          <p className="display-6 text-primary">{data.name}</p>
          <p>{dayjs(data.publishedAt).fromNow()}</p>
          <p>{data.description}</p>
        </div>
      ) : null}
    </div>
  );
}

export default ViewOffer;
