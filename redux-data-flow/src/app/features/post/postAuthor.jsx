import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectAllusers } from '../users/usersSlice';



const PostAuthor = ({userId}) => {
    const users = useSelector(selectAllusers);
    const author = users.find(user => user.id == userId)
  return (
    <span>by {author ? author.name : "unknown author" }</span>
  )
}

export default PostAuthor
