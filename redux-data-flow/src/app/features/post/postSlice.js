// postSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";


const initialState = [
  { id: 1, title: "Introduction to JavaScript", content: "JavaScript is a programming language..." , date: sub(new Date(), {minutes : 10}).toISOString() },
  { id: 2, title: "HTML Basics", content: "HTML stands for HyperText Markup Language..." , date: sub(new Date(), { minutes: 5 }).toISOString() },

];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postadded: {
      reducer(state, action){
        state.push(action.payload)
    }
  },
  prepare(title, content, userId) {
    return {
        payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
      }
    }
  }
  }
});



export const selectAllPost = (state) => state.posts;
export const {postadded} = postSlice.actions;
export default postSlice.reducer;
