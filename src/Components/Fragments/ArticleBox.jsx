import React from "react";

/******************************************************************************
 * The below block of code generates the article numbers between the story
 * title and image and controls their 'onClick' and display behavior. The state
 * is used to display all article numbers, while 'n' is used to indicate the
 * active article being displayed. 'n' is uesed to highlight and set the
 * 'onClick' function results. 'i' ensures proper numbering with map().
 *****************************************************************************/
let i = 0;
const displayNumbers = (state, num) => {
  
  i++;
  let n = i, style;

  // Underlines and colors red the current article number
  if (state + 1 === i) 
    style = { color: "red", textDecoration: "underline" };
  
  // Default article number apperance
  else style = { color: "#1f2833" };
    return (
      <React.Fragment key={i.toString()}>
        <li onClick={ () => {num(n);} } style={style}> {i} </li>
      </React.Fragment>
  );
};

// Function to reset the starting article value to '1' when the page changes.
const resetI = () => { i = 0; };

/******************************************************************************
 * The display (React) function of the article box on the news feed page.
 *****************************************************************************/
function ArticleBox(props) {
  const item = props.articles[props.index];
  const source = item.source.name;
  const title = item.title;
  const url = item.url;
  const image = item.urlToImage;
  let description = item.description;
  let author = item.author;

  if (author === null || description === "")
    author = source;
  if (description === null || description === "")
    description = "No description available."

  return (
    <main>
      <div className="newsBox">

        {/********************************************************************
         * The drop-down news source selector at the top
         ********************************************************************/}
        <select defaultValue="default" onChange={ event => {props.changeNewsSource(event);} }>
          <option value="default" disabled hidden>Select News Source</option>
          <optgroup label="Science & Tech">
            <option value="techcrunch">Tech Crunch News</option>
            <option value="wired">Wired</option>
            <option value="techradar">TechRadar</option>
            <option value="national-geographic">National Geographic</option>
            <option value="hacker-news">Hacker News</option>
            <option value="engadget">Engadget</option>
          </optgroup>
          <optgroup label="Mainstream News">
            <option value="usa-today">USA Today</option>
            <option value="fox-news">Fox News</option>
            <option value="the-wall-street-journal">The Wall Street Journal</option>
            <option value="bbc-news">BBC</option>
            <option value="The-washington-times">The Washington Times</option>
          </optgroup>
          <optgroup label="Net News">
            <option value="google-news">Google News</option>
            <option value="reddit-r-all">Reddit</option>
            <option value="buzzfeed">Buzzfeed</option>
          </optgroup>
          <optgroup label="Sports">
            <option value="nfl-news">NFL News</option>
            <option value="talksport">TalkSport</option>
          </optgroup>
        </select>

        {/*********************************************************************
         * Article title and story navigation buttons. 
         ********************************************************************/}
        <h2>{source}</h2>
        <div className="buttonBox">

          {/* Left arrow */}
          <button onClick={ () => {props.prevArticle();} }>&lt;</button>
          
          {/* Article numbers */}
          <ul>
            { props.articles.map(() => 
              displayNumbers(props.state, props.setArticleNumber)) }
          </ul>

          {/* Right Arrow */}
          <button onClick={() => { props.nextArticle();} }>&gt;</button>
        </div>

        {/* Article image */}
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="Img Unavailable" />
        </a>
        
        <p style={{ textAlign: "center", margin: 0, fontSize: ".75em" }}>
          (Click image for full story)</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <hr />
        <p style={{ textAlign: "right" }}>by {author}</p>
        {resetI()}
      </div>
    </main>
  );
}

export default ArticleBox;
