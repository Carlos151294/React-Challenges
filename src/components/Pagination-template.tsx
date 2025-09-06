import { useEffect, useCallback, useState } from "react";
import { returnPaginationLastPageStartIndex } from "../utils/utils";
import Loader from "../components/Loader";
import cn from "classnames";
import axios from "axios";

interface Post {
  id: string;
  title: string;
  body: string;
}

interface SearchIndexesState {
  startIndex: number;
  endIndex: number;
}

const Pagination = () => {
  const POST_COUNT = 15;
  const PAGE_SIZE = 5;
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchIndexes, setSearchIndexes] = useState<SearchIndexesState>({
    startIndex: 0,
    endIndex: PAGE_SIZE,
  });

  const fetchData = useCallback(
    async (startIndex: number, endIndex: number) => {
      setLoading(true);
      const { data } = await axios.get<Post[]>(
        `https://jsonplaceholder.typicode.com/posts?_start=${startIndex}&_end=${endIndex}`
      );
      setPosts(data);
      setLoading(false);
    },
    []
  );

  const handleOnFirstPageClick = () =>
    setSearchIndexes({
      startIndex: 0,
      endIndex: PAGE_SIZE,
    });

  const handleOnLastPageClick = () => {
    const startIndex = returnPaginationLastPageStartIndex(
      POST_COUNT,
      PAGE_SIZE
    );
    setSearchIndexes({
      startIndex: startIndex,
      endIndex: startIndex + PAGE_SIZE,
    });
  };

  const handleOnNextPageClick = () =>
    setSearchIndexes((prevSearchIndexes) => ({
      ...prevSearchIndexes,
      startIndex: prevSearchIndexes.startIndex + PAGE_SIZE,
      endIndex: prevSearchIndexes.endIndex + PAGE_SIZE,
    }));

  const handleOnPreviousPageClick = () =>
    setSearchIndexes((prevSearchIndexes) => ({
      ...prevSearchIndexes,
      startIndex: prevSearchIndexes.startIndex - PAGE_SIZE,
      endIndex: prevSearchIndexes.endIndex - PAGE_SIZE,
    }));

  useEffect(() => {
    fetchData(searchIndexes.startIndex, searchIndexes.endIndex);
  }, [fetchData, searchIndexes.startIndex, searchIndexes.endIndex]);

  const isOnFirstPage = searchIndexes.startIndex <= 0;
  const isOnLastPage =
    searchIndexes.startIndex >=
    returnPaginationLastPageStartIndex(POST_COUNT, PAGE_SIZE);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="pagination">
        <button
          disabled={isOnFirstPage}
          className={cn("bold icon", {
            disabled: isOnFirstPage,
          })}
          onClick={handleOnFirstPageClick}
        >
          Most left
        </button>
        <button
          disabled={isOnFirstPage}
          className={cn("icon", {
            disabled: isOnFirstPage,
          })}
          onClick={handleOnPreviousPageClick}
        >
          Left
        </button>
        <button
          disabled={isOnLastPage}
          className={cn("icon", {
            disabled: isOnLastPage,
          })}
          onClick={handleOnNextPageClick}
        >
          Right
        </button>
        <button
          disabled={isOnLastPage}
          className={cn("bold icon", {
            disabled: isOnLastPage,
          })}
          onClick={handleOnLastPageClick}
        >
          Most right
        </button>
      </div>
    </div>
  );
};

export default Pagination;
