'use client'
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addCar } from '../redux/store';

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state:any) => {
    return {
      name: state.form.name,
      cost: state.form.cost
    };
  });

  const handleNameChange = (event:any) => {
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event:any) => {
    const carCost = parseInt(event.target.value);
    dispatch(changeCost(carCost));
  };
  const handleSubmit = (event:any) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="">
      <h4 className="">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="">
            <label className="">Name</label>
            <input
              className=" text-gray-800"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="">
            <label className="">Cost</label>
            <input
              className=" text-gray-800"
              value={cost || ''}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className="">
          <button className="">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;