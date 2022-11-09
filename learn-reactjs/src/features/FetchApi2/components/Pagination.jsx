function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { _limit, _page, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);

    const handlePageChange = (newPage) => {
        if (onPageChange) {
            onPageChange(newPage)
        }
    };

    return (
        <>
            <button
                disabled={_page === 1}
                onClick={handlePageChange.bind(null, _page - 1)}
            >
                Prev
            </button>
            <span> - </span>
            <button
                disabled={_page === totalPages}
                onClick={handlePageChange.bind(null, _page + 1)}
            >
                Next
            </button>
        </>
    );
}

export default Pagination;
