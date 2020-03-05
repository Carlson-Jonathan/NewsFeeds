import Home from "./Pages/Home";
import NewsFeeds from "./Pages/NewsFeeds";

function SetPage(page) {
  const pages = [Home, NewsFeeds];
  const pageToExport = pages[page];
  return pageToExport;
}

export default SetPage;

// Michael's API program for reference:
// https://codesandbox.io/s/pics-application-bp8ur
