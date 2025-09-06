import Collapsible from "./Collapsible";

// Limits to 30 if no limit (per_page param) is set
// const SEARCH_ENDPOINT = "https://api.github.com/search/repositories?q=react";

const Instructions = () => (
  <>
    <h2>Github Stars</h2>
    <Collapsible>
      <span>
        Make an HTTP request to get all Github repositories related to React
      </span>
      <span>Render results in table; initially render ten items</span>
      <span>Click the Show All button to render all items</span>
    </Collapsible>
  </>
);

const App = () => {
  return <i>Content here</i>;
};

const GithubStar = () => {
  return (
    <div id="github-stars" className="container">
      <Instructions />
      <App />
    </div>
  );
};

export default GithubStar;
