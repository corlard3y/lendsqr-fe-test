import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  flexRender,
  type ColumnDef,
} from '@tanstack/react-table';
import { useMemo, useState, useRef, useEffect } from 'react';
import './Table.scss';
import { FilterForm } from './FilterForm';
import { FilterIcon, TableArrowLeftIcon, TableArrowRightIcon } from '../../assets/icons';

interface TableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  filterableKeys?: string[];
}

export const FilterablePaginatedTable = <T extends object>({
  data,
  columns,
  filterableKeys = [],
}: TableProps<T>) => {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [showFilterForm, setShowFilterForm] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setShowFilterForm(false);
      }
    };

    if (showFilterForm) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showFilterForm]);

  const filteredData = useMemo(() => {
    return data.filter((row) =>
      Object.entries(filters).every(([key, value]) => {
        const field = row[key as keyof T];
        if (value.trim() === '') return true;

        if (typeof field === 'string' || typeof field === 'number') {
          return String(field).toLowerCase().includes(value.toLowerCase());
        }

        return false;
      })
    );
  }, [data, filters]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
  });

  const pageCount = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex;

  let hasLeftDots = false;
  let hasRightDots = false;

  return (
    <div>
      <div className="table-wrapper">

        {showFilterForm && (
          <div ref={filterRef}>
            <FilterForm
              filters={filters}
              setFilters={setFilters}
              columns={filterableKeys}
            />
           </div>
        )}

        <table className="styled-table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div className="th-content">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.columnDef.header && (
                          <img
                            src={FilterIcon}
                            onClick={() => setShowFilterForm((prev) => !prev)}
                            className="filter-icon"
                          />
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <div className="pagination-info">
          <label htmlFor="page-select">Showing</label>
          <div className="select-wrapper">
            <select
              id="page-select"
              value={currentPage}
              onChange={(e) => table.setPageIndex(Number(e.target.value))}
            >
              {Array.from({ length: pageCount }, (_, i) => (
                <option key={i} value={i}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <span>out of {pageCount}</span>
        </div>

        <div className="pagination-controls">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <img src={TableArrowLeftIcon} />
          </button>

          {Array.from({ length: pageCount }, (_, i) => {
            const isActive = currentPage === i;

            if (
              i === 0 ||
              i === pageCount - 1 ||
              Math.abs(i - currentPage) <= 1
            ) {
              return (
                <button
                  key={i}
                  onClick={() => table.setPageIndex(i)}
                  className={isActive ? 'active' : ''}
                >
                  {i + 1}
                </button>
              );
            }

            if (i < currentPage && !hasLeftDots) {
              hasLeftDots = true;
              return <span key={`left-dots-${i}`}>...</span>;
            }

            if (i > currentPage && !hasRightDots) {
              hasRightDots = true;
              return <span key={`right-dots-${i}`}>...</span>;
            }

            return null;
          })}

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <img src={TableArrowRightIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};
