function ChangePage(props) {
    const { pagination, onChangePage } = props;
    const { _page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);

    const handleChangePage = (newPage) => {
        if (onChangePage) {
            onChangePage(newPage)
        }
    };

    return (
        <>
            <button
                disabled={_page === 1}
                onClick={() => handleChangePage(_page - 1)}
            >
                Prev
            </button>
            <span> - </span>
            <button
                disabled={_page === totalPages}
                onClick={() => handleChangePage(_page + 1)}
            >
                Next
            </button>
        </>
    );
}

export default ChangePage;
