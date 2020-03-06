import React, { useState, useEffect } from "react";
import Axios from "axios";
import ArticleBox from "../Fragments/ArticleBox";
// import GetAPI from "../Utils/GetNewsAPIs";

function NewsFeed() {
  document.getElementById("pageHeading").innerHTML = "NEWS";

  /****************************************************************************
   * Get and set API information:
   ***************************************************************************/
  // STATE TO HOLD ARTICLES
  let [article, setArticle] = useState(0);
  const [newsSource, setNewsSource] = useState("national-geographic");
  const [articles, setArticles] = useState([
    {
      title: "",
      description: "",
      ulr: "",
      urlToImage: "",
      author: "",
      source: { name: "", id: "" }
    }
  ]);

  // COMPONENT DID MOUNT HOOK TO PULL IN ARTICLES AND SET YOUR STATE
  useEffect(() => {
    getArticles();
  }, []); // Empty array will throw an error ensure that effect is only updated once

  // API CONFIG INFORMATION
  const API_KEY = "01ed3de96c7f45ba924e447cde09d6a4";
  // let API_source = "techcrunch";

  let getArticles;
  getArticles = async () => {
    await Axios.get(
      "https://newsapi.org/v2/top-headlines?sources=" +
        newsSource +
        "&apiKey=" +
        API_KEY
    )
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(() => {
        console.log("Error getting API data");
      });
  };

  /****************************************************************************
   * Set specific article:
   ***************************************************************************/
  const previousArticle = () => {
    if (!article) setArticle(articles.length - 1);
    else setArticle(--article);
  };

  const nextArticle = () => {
    if (article === articles.length - 1) setArticle(0);
    else setArticle(++article);
  };

  const changeNewsSource = async event => {
    setNewsSource(event.target.value);
    setArticle(0);
    getArticles();
  };

  return (
    <ArticleBox
      index={article}
      articles={articles}
      prevArticle={previousArticle}
      nextArticle={nextArticle}
      changeNewsSource={changeNewsSource}
    />
  );
}

export default NewsFeed;
