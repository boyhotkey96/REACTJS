import queryString from "query-string";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";

function FetchApi2() {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    // _limit: 10,
    // _page: 1,
    // _totalRows: 1,
  });
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  });

  const handlePageChange = (newPage) => {
    console.log("New Page: ", newPage);
    setFilter({ ...filter, _page: newPage });
  };

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filter);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?}${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.error('Error fetch api 2: ', error.message)
      }
    }
    fetchPostList();
  }, [filter]);

  return (
    <>
      <PostList postList={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </>
  );
}

export default FetchApi2;
