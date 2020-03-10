import React, { useState, useEffect } from "react";
import Axios from "axios";
import ArticleBox from "../Fragments/ArticleBox";
// import GetAPI from "../Utils/GetNewsAPIs";

function NewsFeed() {

  // Set the page heading
  document.getElementById("pageHeading").innerHTML = "NEWS";

  /****************************************************************************
   * Get and set API information:
   ***************************************************************************/
  // STATE TO HOLD ARTICLES
  let newsSource = "";
  let [article, setArticle] = useState(0);
  const [articles, setArticles] = useState([
    {
      title: "A Demonstration of React & Node.js",
      description:
        "This application was created to demonstrate my proficiency using React. React is a JavaScript-based technology that uses stateful components to enhance website browsing experiences by speeding up response time to user interaction all on a single page application. Select a news source from above to proceed.",
      ulr: "https://jonathan-carlson.herokuapp.com/",
      urlToImage: "https://jonathan-carlson.herokuapp.com/images/jon.jpg",
      author: "Jonathan Carlson",
      source: { name: "News Feed Selector", id: "1" }
    }
  ]);

  useEffect(() => {
    getArticles();
  }, []); // Empty array will throw an error ensure that effect is only updated once

  const API_KEY = "01ed3de96c7f45ba924e447cde09d6a4";

  // Reqeust and set API object
  const getArticles = async newSource => {
    await Axios.get(
      "https://newsapi.org/v2/top-headlines?sources=" + 
        newsSource + "&apiKey=" + API_KEY )
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(() => { console.log("Error getting API data for " + newsSource); });
  };

  /****************************************************************************
   * Set specific article:
   ***************************************************************************/
  const previousArticle = () => {
    if (!article) 
      setArticle(articles.length - 1);
    else 
      setArticle(--article);
  };

  const nextArticle = () => {
    if (article === articles.length - 1) 
      setArticle(0);
    else 
      setArticle(++article);
  };

  const setArticleNumber = artNum => { setArticle(artNum - 1); };

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
