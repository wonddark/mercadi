import { useParams } from "react-router-dom";
import { useGetOfferByIdQuery } from "../../state/services/offers.endpoints";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import GoBackBtn from "../common/GoBackBtn";
import usePageTitle from "../../hooks/page-title.hook";
import { formatMoney } from "../../helpers/formatters.helper";
import ArticleOptionsBtn from "../common/ArticleOptionsBtn";

dayjs.extend(relativeTime);

function ViewOffer() {
  const { offerId } = useParams();
  const { data, isLoading } = useGetOfferByIdQuery(`${offerId}`);
  usePageTitle({ name: data?.name, loading: isLoading });
  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col col-1">
          <GoBackBtn to="/muro" />
          {!isLoading ? <ArticleOptionsBtn article={data} /> : null}
        </div>
        <div className="col col-11">
          {!isLoading ? (
            <>
              <h1>{data.name}</h1>
              <p className="small">
                por <strong>{data.user.name}</strong>,{" "}
                {dayjs(data.publishedAt).fromNow()}
              </p>
              <p>{data.description}</p>
              <p className="small fw-bold text-primary">
                <i className="bi bi-flag-fill me-1" />
                {formatMoney(data.highestBid.quantity)}
              </p>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ViewOffer;
