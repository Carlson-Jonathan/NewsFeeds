import { useState, useEffect } from "react";
import Axios from "axios";

function GetAPI() {
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
}

export default GetAPI();
