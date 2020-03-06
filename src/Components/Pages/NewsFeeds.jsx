import React, { useState, useEffect } from "react";
import Axios from "axios";
import ArticleBox from "../Fragments/ArticleBox";

function NewsFeed() {
  document.getElementById("pageHeading").innerHTML = "NEWS";

  //STATE TO HOLD ARTICLES

  // Attempting to create a new peice of state to update the articles on button click;

  const [article, setArticle] = useState(0);
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

  let newsArticle = 0;
  // function setArticle(newArticle) {
  //   newsArticle = newArticle;
  //   console.log("button clicked!");
  // }

  return (
    <ArticleBox
      index={newsArticle}
      articles={articles}
      setArticle={setArticle}
    />
  );
}

export default NewsFeed;
