const SearchBox = ({
    totalCount,
    pageCount,
    queryString,
    onTotalChange,
    onQueryChange
}) => {
    return (
        <div className="d-flex align-items-center bg-light rounded-3 px-3 py-2">
            <div className="d-flex align-items-center">
                <label htmlFor="queryString" className="text-secondary">
                    Search
                </label>
                <input
                    id="queryString"
                    className="form-control form-control-sm"
                    value={queryString}
                    onChange= {(event) => { onQueryChange(event.target.value) }}
                />
            </div>
            <div className="d-flex align-items-center">
                <label htmlFor="pageCount" className="text-secondary fw-bold">
                    Show
                </label>
                <input
                    id="pageCount"
                    className="form-control form-control-sm"
                    type="number"
                    min="1"
                    max="100"
                    value={pageCount}
                    onChange= {(event) => { onTotalChange(event.target.value) }}
                />
            </div>
            <div>
                <b className="text-secondary">Total:</b>
                {totalCount}
            </div>
        </div>
    )
}
export default SearchBox;
