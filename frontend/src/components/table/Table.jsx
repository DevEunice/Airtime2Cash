import './table.scss'
import { useTable, usePagination } from "react-table";
import { useEffect } from 'react';

const Table = ({ columns, data, fetchData, controlledPageCount }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    prepareRow,
    state: { pageIndex, pageSize }
  } = useTable({
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 15 },
      manualPagination: true,
      autoResetPage: false,
      pageCount: controlledPageCount,
    }, usePagination);

  useEffect(() => {
    fetchData && fetchData({ pageIndex, pageSize })
  }, [fetchData, pageIndex, pageSize])

  return (
  <>
    <table className="table" {...getTableProps()}>
      <thead className="table_header">
        {headerGroups.map(headerGroup => (
          <tr className="table_row"
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map(column => (
              <th
                className="table_heading"
                {...column.getHeaderProps()}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="tbody" {...getTableBodyProps()}>
        {page.map((row) => {
          prepareRow(row)
          return (
            <tr className='tbody_row' {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    className="tbody_cell"
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    <div className='tablePagination'>
      <span className='paginationTxt'>
        Page{" "}
          {pageIndex + 1} of {pageOptions.length}
          {" "}
      </span>
        
      <div>
        <button className='paginationBtn' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button className='paginationBtn' onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{" "}
        <button className='paginationBtn' onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{" "}
        <button className='paginationBtn' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
      </div>
      
      <span>
        Go to page:{" "}
        <input className='paginationInput'
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const pageNumber = e.target.value
              ? Number(e.target.value) - 1
              : 0;
            gotoPage(pageNumber);
          }}
          style={{ width: "50px" }}
        />
      </span>
      </div>
  </>
  );
};

export default Table;