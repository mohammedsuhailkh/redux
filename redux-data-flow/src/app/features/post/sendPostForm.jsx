import React, { useState } from 'react';

import {useDispatch,useSelector} from 'react-redux';
import { postadded } from './postSlice';
import { nanoid } from '@reduxjs/toolkit';
import { selectAllusers } from '../users/usersSlice';





const SendPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setuserId] = useState('');
  

  const users = useSelector(selectAllusers);
  const cansave = Boolean(title) && Boolean(content) && Boolean(userId);
  
  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const contentChange = (event) => {
    setContent(event.target.value);
  };

  const OnAuthorChange = (event) => {
    setuserId(event.target.value);
  };
  const dispatch = useDispatch();


  const AddPostToForm = ()=>{
    if(title && content){
        dispatch(
            postadded({id:nanoid(),title, content, userId})
        
        
        )
        setTitle("");
        setContent("");
    }
  }



  const userAdded = users.map(user =>(
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
   <section>
     <form className="form-container">
      <h3>Add Post</h3>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        value={title}
        onChange={titleChange}
        placeholder="Enter title"
      />
     <label htmlFor="selectAuthor" style={{ fontWeight: 'bold', marginRight: '10px' }}>Author :</label>
<select
  name=""
  id="selectAuthor"
  value={userId}
  onChange={OnAuthorChange}
  style={{ padding: '5px',width:'270px', borderRadius: '5px', border: '1px solid #ccc' }}>
  <option value=""></option>
  {userAdded}
</select>


      <label htmlFor="content">Content:</label>
      <input
        type="text"
        value={content}
        onChange={contentChange}
        placeholder="Enter the content"
      />
      <button disabled={!cansave} onClick={AddPostToForm} type='button'>save post</button>
    </form>
   </section>
  );
};

export default SendPostForm;
