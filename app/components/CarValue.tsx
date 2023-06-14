'use client'
import { useSelector } from 'react-redux';

interface carsType {
  cars: { data: any; searchTerm: any; }
}

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }: carsType) => data
  .filter((car:any)=> car.name.toLowerCase().includes(searchTerm.toLowerCase()))
  .reduce((acc: any, car:any )=> acc + car.cost, 0)
  );
  // const totalCost = useSelector(({ cars: { data, searchTerm } }: carsType) => {
  //   const filteredCars = data.filter((car:any)=>{
  //     return car.name.toLowerCase().includes(searchTerm.toLowerCase());
  //   })
  //   return filteredCars.reduce((acc: any, car:any )=> acc + car.cost, 0)
  //   // let cost=0;
  //   // for (let car of filteredCars){
  //   //   cost += car.cost
  //   // }
  //   // return cost
  // });

  return (
    <div className=''>
      Total Cost: ${totalCost}
    </div>
  )
}

export default CarValue