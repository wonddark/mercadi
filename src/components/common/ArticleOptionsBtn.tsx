import { useAppSelector } from "../../hooks/state.hooks";
import { selectId } from "../../state/slices/session.slice";

type ArticleOptionsBtnProps = {
  article: any;
};

function ArticleOptionsBtn({ article }: ArticleOptionsBtnProps) {
  const loggedUserId = useAppSelector(selectId);
  return (
    <>
      <button
        id="dropdown-options"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-label="Profile"
        className="btn btn-link"
      >
        <i className="bi bi-three-dots-vertical" />
      </button>
      <ul
        className="dropdown-menu dropdown-menu-start"
        aria-labelledby="dropdown-options"
      >
        <li>
          <span className="dropdown-header">Opciones</span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        {article.user.id === loggedUserId ? (
          <li>
            <button className="dropdown-item">Editar</button>
          </li>
        ) : null}
      </ul>
    </>
  );
}

export default ArticleOptionsBtn;
