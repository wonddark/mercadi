import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  return (
    <form className="h-100 w-100" onSubmit={doSearch}>
      <input
        type="search"
        placeholder="Buscar artículos..."
        className="form-control"
        name="search-field"
        value={searchTerm}
        onChange={updateSearchTerm}
      />
      <input type="submit" hidden />
    </form>
  );
}

export default SearchOffers;
