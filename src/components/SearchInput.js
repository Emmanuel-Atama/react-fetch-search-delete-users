// import { useContext } from 'react';
// import { AppContext } from './RenderUserList';
const SerachInput = ({setSearchTerm}) => {
  // const {setSearchTerm} = useContext(AppContext)
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