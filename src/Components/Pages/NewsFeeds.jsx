import React, { useState, useEffect } from "react";
import Axios from "axios";
import ArticleBox from "../Fragments/ArticleBox";
// import GetAPI from "../Utils/GetNewsAPIs";

function NewsFeed() {
  document.getElementById("pageHeading").innerHTML = "NEWS";

  //STATE TO HOLD ARTICLES

  let [article, setArticle] = useState(0);
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

  //COMPONENT DID MOUNT HOOK TO PULL IN ARTICLES AND SET YOUR STATE
  useEffect(() => {
    getArticles();
  }, []); //empty array will throw an error ensure that effect is only updated once

  //API CONFIG INFORMATION
  const API_KEY = "01ed3de96c7f45ba924e447cde09d6a4";
  const API_source = "national-geographic";
  let getArticles;
  if (articles[0].title === "") {
    getArticles = async () => {
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
  }

  let currentArticle = 0;
  function previousArticle() {
    console.log("currentArticle = " + currentArticle);
    if (!article) setArticle(9);
    else setArticle(--article);
  }

  function nextArticle() {
    console.log("currentArticle = " + currentArticle);
    if (article === 9) setArticle(0);
    else setArticle(++article);
  }

  return (
    <ArticleBox
      index={article}
      articles={articles}
      buttons={[previousArticle, nextArticle]}
    />
  );
}

export default NewsFeed;
