import React from 'react'
import PostList from './app/features/post/postList'
import SendPostForm from './app/features/post/sendPostForm'
import "./App.css"

const App = () => {
  return (
    <div className='app'>
      <SendPostForm/>
      <PostList/>
     
    </div>
  )
}

export default App
