'use client'
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../redux/store';

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state:any) => {
    return state.cars.searchTerm;
  });

  const handleSearchTermChange = (event:any) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="">
      <h3 className="">Fearch for Cars</h3>
      <div className="">
        <label className="">Search</label>
        <input
          className="text-gray-800"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}
export default CarSearch;
