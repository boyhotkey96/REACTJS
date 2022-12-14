import { useEffect, useState } from "react";
import List from "./components/List";
import ChangePage from "./components/Pagination";
import queryString from 'query-string'
import InputSearch from "./components/InputSearch";

function FetchApi() {
    const [list, setList] = useState([]);
    const [pagination, setPagination] = useState({
        _limit: 10,
        _page: 1,
        _totalRows: 11,
    });
    const [filter, setFilter] = useState({
        _limit: 10,
        _page: 1,
        title_like: '',
    })

    const handleChangePage = (newPage) => {
        // console.log(newPage);
        setFilter({...filter, _page: newPage})
    };

    useEffect(() => {
        async function fetchPostList() {
            try {
                const paramsString = queryString.stringify(filter)
                const requestUrl =
                    `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                console.log(responseJSON);

                const { data, pagination } = responseJSON;
                setList(data);
                setPagination(pagination);
            } catch (error) {
                console.error("Fetapi error: ", error.message);
            }
        }

        fetchPostList();
    }, [filter]);

    const handleSubmitForm = (value) => {
        // console.log(value)
        const { searchTerm } = value;
        setFilter({...filter, _page: 1, title_like: searchTerm})
    }

    return (
        <>
            <InputSearch onSubmit={handleSubmitForm} />
            <List list={list} />
            <ChangePage pagination={pagination} onChangePage={handleChangePage} />
        </>
    );
}

export default FetchApi;
