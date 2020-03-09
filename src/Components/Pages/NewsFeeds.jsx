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
  // const [newsSource, setNewsSource] = useState("national-geographic");
  let newsSource = "";
  let [article, setArticle] = useState(0);

  // let article = 0;
  // const setArticle = num => {
  //   article = num;
  //   getArticles();
  // };

  const [articles, setArticles] = useState([
    {
      title: "",
      description: "Select a news source from the drop-down above",
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

  let getArticles;
  getArticles = async newSource => {
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

  const setArticleNumber = artNum => {
    setArticle(artNum - 1);
  };

  const changeNewsSource = event => {
    newsSource = event.target.value;
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
      state={article}
      setArticleNumber={setArticleNumber}
    />
  );
}

export default NewsFeed;
