// postSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Introduction to JavaScript", content: "JavaScript is a programming language..." },
  { id: 2, title: "HTML Basics", content: "HTML stands for HyperText Markup Language..." },
  { id: 3, title: "CSS Styling", content: "CSS is used to style web documents..." }
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {}
});


export const selectAllPost = (state) => state.posts;
export default postSlice.reducer;
