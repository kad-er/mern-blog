import React from "react";
import articles from "./articles-content";
//component
import Articles from "../components/articles";

function articleslist() {
  return (
    <div className="mb-20">
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        Articles
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap m-4">
          <Articles articles={articles}></Articles>
        </div>
      </div>
    </div>
  );
}

export default articleslist;
