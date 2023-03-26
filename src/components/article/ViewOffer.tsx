import { useParams } from "react-router-dom";
import { useGetOfferByIdQuery } from "../../state/services/offers.endpoints";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import GoBackBtn from "../common/GoBackBtn";
import usePageTitle from "../../hooks/page-title.hook";
import { formatMoney } from "../../helpers/formatters.helper";
import ArticleOptionsBtn from "../common/ArticleOptionsBtn";
import PostBidBtn from "../bid/PostBidBtn";
import { useAppSelector } from "../../hooks/state.hooks";
import { selectId, selectIsLogged } from "../../state/slices/session.slice";
import LoginForm from "../security/LoginForm";

dayjs.extend(relativeTime);

function ViewOffer() {
  const { offerId } = useParams();
  const { data, isLoading } = useGetOfferByIdQuery(`${offerId}`);
  usePageTitle({ name: data?.name, loading: isLoading });
  const isAuthenticated = useAppSelector(selectIsLogged);
  const userId = useAppSelector(selectId);
  return (
    <div className="container-xxl mt-3">
      <div className="row">
        <div className="col col-12 col-lg-8">
          <div className="container-xxl">
            <div className="row">
              <div className="col col-1">
                <div className="card">
                  <GoBackBtn to="/muro" />
                  {!isLoading ? <ArticleOptionsBtn article={data} /> : null}
                </div>
              </div>
              <div className="col col-11">
                <div className="card card-body">
                  {!isLoading ? (
                    <>
                      <h1>{data.name}</h1>
                      <p className="small">
                        por <strong>{data.user.name}</strong>,{" "}
                        {dayjs(data.publishedAt).fromNow()}
                      </p>
                      <p>{data.description}</p>
                      <p className="small fw-bold text-primary m-0">
                        <i className="bi bi-flag-fill me-1" />
                        {formatMoney(data.highestBid.quantity)}
                        <span
                          className="text-info ms-1"
                          style={{ fontSize: "0.7rem" }}
                        >
                          Oferta actual
                        </span>
                      </p>
                      {data.medias.length > 0 ? (
                        <div className="container mt-1">
                          <div className="row gap-1 my-3">
                            {data.medias.map((token: any) => (
                              <button
                                key={token.id}
                                className="col offer-media border-0"
                                style={{
                                  backgroundImage: `url("${
                                    process.env.REACT_APP_API_URL +
                                    token.contentUrl
                                  }")`,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col d-none d-lg-block col-lg-4">
          {isAuthenticated && !isLoading && data.user.id !== userId ? (
            <div className="mt-1">
              <PostBidBtn
                offerId={data["@id"]}
                highestBid={data.highestBid.quantity}
              />
            </div>
          ) : (
            <LoginForm />
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewOffer;
