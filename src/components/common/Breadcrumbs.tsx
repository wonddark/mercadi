import { useLocation } from "react-router-dom";

function Breadcrumbs() {
  const { state } = useLocation();
  const historyPath: { name: string; path: string; current: boolean }[] =
    state && "historyPath" in state ? state.historyPath : [];
  return (
    <nav>
      <ol className="breadcrumb">
        {historyPath.map((item) => (
          <li className="breadcrumb-item">
            {!item.current ? (
              <a href={item.path}>{item.name}</a>
            ) : (
              <span>{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
