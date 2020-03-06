import React from "react";

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
        <select>
          <option>National Geographic</option>
          <option>News Feed</option>
          <option>News Feed</option>
          <option>News Feed</option>
          <option>News Feed</option>
        </select>
        <div className="buttonBox">
          <button onClick={() => props.setArticle(1)}> &lt; </button>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>
          <button> &gt; </button>
        </div>
        {/* <h2>{source}</h2> */}
        <a href={url}>
          <img src={image} alt="Unavailable" />
        </a>
        <h3>{title}</h3>
        <p>{description} (Click on image to continue reading)</p>
        <hr />
        <p style={{ textAlign: "right" }}>by {author}</p>
      </div>
    </main>
  );
}

export default ArticleBox;
