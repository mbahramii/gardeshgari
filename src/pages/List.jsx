import React from 'react';

const List = ({ submittedArticles }) => {
  return (
    <div className="container mx-auto mt-5">
      {submittedArticles.map((article, index) => (
        <div key={index} className="mb-4 p-4 bg-white shadow rounded">
          <h2 className="text-xl font-bold">{article.title}</h2>
          <img src={article.cover} alt={article.title} className="w-full h-48 object-cover mt-2" />
        </div>
      ))}
    </div>
  );
};

export default List;
