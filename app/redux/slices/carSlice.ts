import { createSlice, nanoid } from "@reduxjs/toolkit";

interface Car {
  name: string;
  cost: number;
  id: string;
}

interface CarState {
  searchTerm: string;
  data: Car[];
}

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    data: []
  } as CarState, // Set the initial state with the correct type
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      const { name, cost } = action.payload;
      state.data.push({
        name,
        cost,
        id: nanoid()
      });
    },
    // addCar(state,action){
    //     state.data.push({
    //         name:action.payload.name,
    //         cost:action.payload.cost,
    //         id:nanoid()
    //     });
    // },
    removeCar(state, action) {
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updated;
    }
  }
});

export const {changeSearchTerm, addCar, removeCar} = carSlice.actions;
export const carReducer = carSlice.reducer;
