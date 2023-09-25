import React from 'react'

const comments = ({comments}) => {
    return (
        <>
        <h3 className="sm:text-2xl text-xl font-bold text-gray-900 ">Comments:</h3>
        {
            
            comments && comments.map((comment,key) => (
                <div key={key}>
                    <h4 className="sm:text-xl text-lg font-bold text-gray-900 inline ">{comment.username}:</h4>
                    <p className="sm:text-lg text-md font-bold text-gray-600 inline mx-4">{comment.comment}</p>
                </div>))
        }
        </>
    )
}

export default comments