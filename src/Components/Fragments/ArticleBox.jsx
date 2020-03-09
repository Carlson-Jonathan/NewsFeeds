import React from "react";
// import DisplayNumbers from "./ArticleNumbers";

let i = 0;
const displayNumbers = (state, num) => {
  i++;
  let n = i;
  let style;
  if (state + 1 === i) style = { color: "red", textDecoration: "underline" };
  else style = { color: "#1f2833" };
  return (
    <React.Fragment>
      <li
        onClick={() => {
          num(n);
          i = 0;
        }}
        style={style}
      >
        {i}
      </li>
    </React.Fragment>
  );
};

const resetI = () => {
  i = 0;
};

function ArticleBox(props) {
  const index = props.index;
  const source = props.articles[index].source.name;
  const title = props.articles[index].title;
  const description = props.articles[index].description;
  const url = props.articles[index].url;
  const image = props.articles[index].urlToImage;
  const author = props.articles[index].author;

  return (
    <main>
      <div className="newsBox">
        <select
          onChange={event => {
            i = 0;
            props.changeNewsSource(event);
          }}
        >
          <option value="" selected disabled hidden>
            Select News Source
          </option>
          <option value="national-geographic">National Geographic</option>
          <option value="techcrunch">Tech Crunch News</option>
          <option value="wired">Wired</option>
          <option value="techradar">TechRadar</option>
          <option value="google-news">Google News</option>
          <option value="reddit-r-all">Reddit</option>
          <option value="usa-today">USA Today</option>
        </select>

        <h2>{source}</h2>
        <div className="buttonBox">
          <button
            onClick={() => {
              i = 0;
              props.prevArticle();
            }}
          >
            &lt;
          </button>
          <ul>
            {props.articles.map(
              () => displayNumbers(props.state, props.setArticleNumber),
              resetI()
            )}
          </ul>
          <button
            onClick={() => {
              i = 0;
              props.nextArticle();
            }}
          >
            &gt;
          </button>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="Unavailable" />
        </a>
        <p style={{ textAlign: "center", margin: 0, fontSize: ".75em" }}>
          (Click image for full story)
        </p>
        <h3>{title}</h3>
        <p>{description}</p>
        <hr />
        <p style={{ textAlign: "right" }}>by {author}</p>
      </div>
    </main>
  );
}

export default ArticleBox;
