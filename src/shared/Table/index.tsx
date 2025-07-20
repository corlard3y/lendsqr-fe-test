import React, { useState } from 'react';
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  flexRender,
  getFilteredRowModel,
  type ColumnDef
} from '@tanstack/react-table';
import './Table.scss';
import { FilterForm } from './FilterForm';
import { FilterIcon } from '../../assets/icons';

interface TableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
}

export const FilterablePaginatedTable = <T extends object>({ data , columns }: TableProps<T>) => {


  const [filters, setFilters] = useState<Record<string, string>>({});
  const [showFilters, setShowFilters] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination: {
        pageIndex,
        pageSize,
      },
      globalFilter: '',
      columnFilters: Object.entries(filters)
        .filter(([_, value]) => value)
        .map(([id, value]) => ({ id, value })),
    },
    onPaginationChange: updater => {
      const newPagination = typeof updater === 'function' ? updater({ pageIndex, pageSize }) : updater;
      setPageIndex(newPagination.pageIndex);
      setPageSize(newPagination.pageSize);
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div>
    <div className="table-wrapper">
      {showFilters && (
        <FilterForm
          filters={filters}
          setFilters={setFilters}
          columns={
            columns
              .filter((col): col is { accessorKey: string } => 'accessorKey' in col && typeof col.accessorKey === 'string')
              .map(col => col.accessorKey)
          }
        />
      )}

      <table className="styled-table">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div className="th-content">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {(header.column.columnDef.header && <img src={FilterIcon} alt="Filter" className="filter-icon" onClick={() => {
                        setShowFilters(!showFilters)
                      }} />)}
                    </div>
                  )}
                </th>
              ))}

            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

      <div className="pagination">
        <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Previous
        </button>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
        </button>
      </div>
    </div>
  );
};
