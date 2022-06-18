import { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const products = [...Array(50).keys()].map((_, i) => ({ id: i, name: `Product ${i}`, price: i * 10 }));

const columns = [
  {
    dataField: 'id',
    text: 'Product ID',
    sort: true,
  },
  {
    dataField: 'name',
    text: 'Product Name',
    sort: true,
  },
  {
    dataField: 'price',
    text: 'Product Price',
    sort: true,
  },
];

const MyTable = () => {
  const [selectedRows, setSelectedRows] = useState<Array<any>>([]);
  return (
    <>
      <BootstrapTable
        hover
        striped
        keyField='id'
        data={products}
        columns={columns}
        selectRow={{
          mode: 'checkbox',
          clickToSelect: true,
          onSelect: (row, isSelected) => {
            if (isSelected) setSelectedRows((prevRows) => [...prevRows, row]);
            else setSelectedRows((prevRows) => prevRows.filter((r) => r.id !== row.id));
          },
          onSelectAll: (isSelect, rows) => {
            if (isSelect) setSelectedRows(rows as Array<any>);
            else setSelectedRows([]);
          },
        }}
        pagination={paginationFactory({ sizePerPage: 10, hideSizePerPage: true, hidePageListOnlyOnePage: false })}
      />
      <div>{JSON.stringify(selectedRows, null, 2)}</div>
    </>
  );
};

export default MyTable;
