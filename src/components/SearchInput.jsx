const SearchInput = (props) => {
  return (
    <>
      <input
        type="text"
        id={props.id}
        placeholder="Search..."
        aria-label="search"
        className={`border rounded-3xl px-4 ${props.className}`}
        autoFocus
        ref={props.refs}
        onKeyUp={(e) => props.onKeyUp(e)}
      />
    </>
  );
};

export default SearchInput;
