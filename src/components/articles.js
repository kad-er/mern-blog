import React from 'react'
import { Link } from 'react-router-dom'


const articles = ({articles}) => {
  return (
    <>
        {articles.map((article, key) => (
        <div className="p-4 md:w-1/2" key={key}>
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"> 
            <Link to={`/articles/${article.name}`}>
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={article.thumbnail} alt="blog"/>
            </Link>
            
            <div className="p-6">
                <Link key={key} to={`/articles/${article.name}`}>
                    <h3 className="font-medium text-lg text-gray-900 mb-3">
                    {article.title}
                    </h3>
                </Link>
                <p className="leading-relaxed mb-3">
                    {article.content[0].substring(0,150)}...
                </p>
                <div>
                    <Link className="text-indigo-500 inline-flex items-center  md:mb-2 lg:mb-0 mx-auto" to={`/articles/${article.name}`}>
                        Learn more
                    </Link>
                </div>
            </div>
            </div>
        </div>
      ))}
      </>
  )
}

export default articles