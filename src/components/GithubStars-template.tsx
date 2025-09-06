import React from "react";

const SEARCH_ENDPOINT = "https://api.github.com/search/repositories?q=react";

interface Repo {
  id: string;
  name: string;
  forks: number;
  stars: number;
}

const App = () => {
  const [showAll, setShowAll] = React.useState(false);
  const [allLoaded, setAllLoaded] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [pageData, setPageData] = React.useState([]);

  const fetchRepositories = async (loadAll = false) => {
    const url = loadAll
      ? `${SEARCH_ENDPOINT}`
      : `${SEARCH_ENDPOINT}&per_page=10`;
    const res = await fetch(url);
    const data = await res.json();
    const mappedData = data.items.map(
      (repo: {
        id: string;
        name: string;
        forks: number;
        stargazers_count: number;
      }) => ({
        id: repo.id,
        name: repo.name,
        forks: repo.forks,
        stars: repo.stargazers_count,
      })
    );
    setData(mappedData);
    setPageData(mappedData);
  };

  const handleShowAll = () => {
    if (!allLoaded) {
      fetchRepositories(true);
      setShowAll((prev) => !prev);
      setAllLoaded(true);
      return;
    }

    if (showAll) {
      setPageData(data.slice(0, 10));
    } else {
      setPageData(data);
    }

    setShowAll((prev) => !prev);
  };

  React.useEffect(() => {
    fetchRepositories();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Package</th>
            <th>Stars</th>
            <th>Forks</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((repo: Repo) => (
            <tr key={repo.id}>
              <td>{repo.name}</td>
              <td>{repo.stars}</td>
              <td>{repo.forks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleShowAll}>
        {showAll ? "Show Less" : "Show All"}
      </button>
    </div>
  );
};

export default App;
