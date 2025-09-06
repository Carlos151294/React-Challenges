import Collapsible from "./Collapsible";
// import App from './Pagination-template';

const Instructions = () => (
  <>
    <h2>Pagination</h2>
    <Collapsible>
      <span>Make an HTTP request to get posts via JSON placeholder</span>
      <span>Render posts in table rows with pagination</span>
    </Collapsible>
  </>
);

const App = () => {
  return <i>Content here</i>;
};

const Pagination = () => {
  return (
    <div id="pagination" className="container">
      <Instructions />
      <App />
    </div>
  );
};

export default Pagination;
