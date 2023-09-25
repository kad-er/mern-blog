import React, { useState } from 'react'

const Commentform = ({setArticleinfo, name}) => {
    const [username, setUsername] =useState('')
    const [comment, setComment] = useState('')
    const addComment = async () => {
        console.log(username,comment)
        const res = await fetch(`/api/articles/${name}/comment`,{ method: 'POST', body: JSON.stringify({username,comment}), headers: { 'Content-Type': 'application/json' }})
        console.log(res)
        const body = await res.json()
        
        setArticleinfo(body)
        setUsername('')
        setComment('')
    }
  return (
    <>
    <h3>Add a comment</h3>
    <input type="text" value={username} onChange={ (e) => setUsername(e.target.value)} placeholder="name" name="name" className="border border-gray-400 p-2 my-2 w-full"></input>
    <textarea name="comment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="comment" className="border border-gray-400 p-2 my-2 w-full"></textarea>
    <button onClick={()=>addComment()} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add comment</button>
    </>
  )
}

export default Commentform