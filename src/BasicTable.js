import React, { useMemo } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import column, { GROUPED_COLUMN } from "./column";
import mock_data from "./MOCK_DATA.json";

function BasicTable() {
  const columns = useMemo(() => GROUPED_COLUMN, []);
  const data = useMemo(() => mock_data, []);

  const table = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    prepareRow,
    setGlobalFilter,
  } = table;

  const { globalFilter } = state;

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
      <table {...getTableProps()} id="customers">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>{column.isSorted ? "⇅" : ""}</span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BasicTable;
