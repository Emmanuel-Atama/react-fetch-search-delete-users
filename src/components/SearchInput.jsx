
const SerachInput = ({setSearchTerm}) => {

    return (
      <input
        className="rounded mb-3"
        type="text"
        placeholder="Search username..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    );
  }
  export default SerachInput