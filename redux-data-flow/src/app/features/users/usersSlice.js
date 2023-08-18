import { createSlice } from "@reduxjs/toolkit";


// const getDynamicTimestamp = (minutesAgo) => sub(new Date(), { minutes: minutesAgo }).toISOString();

const initialState = [
  { id: 1, name: "John",},
  { id: 2, name: "Susan",  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
});

export const selectAllusers = (state) => state.users;

export default usersSlice.reducer;
