import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import articles from "./articles-content";
import Articles from "../components/articles"
import Notfound from "./notfound"
import Comments from "../components/comments"
import Commentform from "../components/commentform";
function Article() {
  const { name } = useParams();
  const  article  = articles.find((article) =>article.name === name);
  const [articleinfo,setarticleinfo] = useState([{comments:[]}])

  useEffect(()=>{
    const data= async () =>{
      const result = await fetch(`/api/articles/${name}`)
      const body = await result.json()
      setarticleinfo(body)
      console.log(body)
    }
    data()
   


  },[name])
  if(!article) return <Notfound/>
  const other = articles.filter((article) => article.name !== name);
  return (
 
      <>
        <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
          {article.title}
        </h1>
        <div className="mb-6">
          {article.content.map((paragraph, key) => (
            <p className="mx-auto leading-relaxed text-base mb-4" key={key}>
              {paragraph}
            </p>
          ))}
        </div>
        <Comments comments={articleinfo.comments}/>
        <Commentform name={name} setArticleinfo={setarticleinfo}/>
              <h1 className="sm:text-2xl text-xl font-bold  text-gray-900">Other articles</h1>
              <div className="flex flex-wrap -mx-2">
              <Articles articles={other}/>
              </div>
              
      </>
    
  );
}

export default Article;
