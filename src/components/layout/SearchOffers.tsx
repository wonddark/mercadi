import { ChangeEvent, FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const updateSearchTerm = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(value);
  };
  const doSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate({ pathname: "/buscar", search: `q=${searchTerm}` });
  };

  return { searchTerm, updateSearchTerm, doSearch };
}

function SearchOffers() {
  const { searchTerm, updateSearchTerm, doSearch } = useSearch();
  const { pathname } = useLocation();
  return (
    <>
      {!pathname.includes("buscar") ? (
        <form className="h-100 w-100" onSubmit={doSearch}>
          <div className="input-group">
            <input
              type="search"
              placeholder="Buscar artículos..."
              className="form-control shadow-none"
              style={{ borderRight: "none" }}
              name="search-field"
              value={searchTerm}
              onChange={updateSearchTerm}
            />
            <button className="btn btn-light" type="submit">
              <i className="bi bi-search" />
            </button>
          </div>
        </form>
      ) : null}
    </>
  );
}

export default SearchOffers;
