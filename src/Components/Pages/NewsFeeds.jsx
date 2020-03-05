import React, { useState, useEffect } from "react";
import Axios from "axios";
import ArticleBox from "../Fragments/ArticleBox";

function NewsFeed() {
  //STATE TO HOLD ARTICLES
  let [articles, setArticles] = useState([
    {
      title: "Default Title",
      description: "Default Description",
      ulr: "Default URL",
      urlToImage: "Default Image",
      author: "Default Author",
      source: { name: "Default News Organization", id: "Default asdf" }
    }
  ]);
  //COMPONENT DID MOUNT HOOK TO PULL IN ARTICLES AND SET YOUR STATE
  useEffect(() => {
    getArticles();
  }, []); //empty array will throw an error ensure that effect is only updated once

  //API CONFIG INFORMATION
  const API_KEY = "01ed3de96c7f45ba924e447cde09d6a4";
  const API_source = "national-geographic";

  const getArticles = async () => {
    await Axios.get(
      "https://newsapi.org/v2/top-headlines?sources=" +
        API_source +
        "&apiKey=" +
        API_KEY
    )

      .then(response => {
        const data = response.data.articles;
        setArticles(data);
        return response.data.articles;
      })

      .catch(() => {
        console.log("Error getting data");
      });
  };
  const index = 0;
  return <ArticleBox index={index} articles={articles} />;
}

export default NewsFeed;
