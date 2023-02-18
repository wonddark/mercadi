import { useParams } from "react-router-dom";
import { useGetOfferByIdQuery } from "../state/services/offers.endpoints";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import GoBackBtn from "./common/GoBackBtn";

dayjs.extend(relativeTime);

function ViewOffer() {
  const { offerId } = useParams();
  const { data, isLoading } = useGetOfferByIdQuery(`${offerId}`);
  document.title = isLoading ? "Cargando..." : data.name;
  return (
    <div className="container-xxl mt-3">
      <GoBackBtn to="/muro" />
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
