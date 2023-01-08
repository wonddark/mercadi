import { ChangeEvent, FormEvent, useState } from "react";
import { setDescription, setName } from "../../state/slices/search";
import { useAppDispatch } from "../../hooks/state.hooks";

function useSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const updateSearchTerm = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(value);
  };
  const doSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setName(searchTerm));
    dispatch(setDescription(searchTerm));
  };

  return { searchTerm, updateSearchTerm, doSearch };
}

function SearchOffers() {
  const { searchTerm, updateSearchTerm, doSearch } = useSearch();
  return (
    <form className="h-100" onSubmit={doSearch}>
      <input
        type="search"
        placeholder="Algo"
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
