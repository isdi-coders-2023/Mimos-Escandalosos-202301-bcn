import SearchBarStyled from "./SearchBarStyled";

export const SearchBar = (): JSX.Element => {
  return (
    <SearchBarStyled
      type="text"
      aria-label="search"
      placeholder="Search meal"
      className="search-bar"
    />
  );
};
