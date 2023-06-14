'use client'
import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../redux/store';

interface carsType {
  form:any,
  cars: { data: any; searchTerm: any; }
}

function CarList() {
  const dispatch = useDispatch();
  const {cars, name} = useSelector(({form, cars: { data, searchTerm } }: carsType) => {
    const filteredCars = data.filter((car: any)=>car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return{
      cars:filteredCars,
      name:form.name
    }    
  });
  // const cars = useSelector(({ cars: { data, searchTerm } }: carsType) => {
  //   return data.filter((car: any)=>car.name.toLowerCase().includes(searchTerm.toLowerCase()))
  // });
  // // const cars = useSelector((state:any) => {
  // //   return state.cars.data;
  // // });

  const handleCarDelete = (car: any) => {
    dispatch(removeCar(car.id))
  };
  const renderedCars = cars.map((car: any) => {
    //filter bold
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    
    return (
      <div key={car.id} className={`panel ${bold && 'text-2xl'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className=""
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;