import { useEffect, useState } from 'react';
import BootstrapTable, { ColumnDescription, TableChangeHandler } from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
// @ts-ignore
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory from 'react-bootstrap-table2-filter';
import Container from 'react-bootstrap/Container';

const MyCustomTable = ({
  columns,
  remoteDataUrl,
  paginationOptions,
  defaultSort = { dataField: 'firstName', order: 'asc' },
}: PropTypes) => {
  const [data, setData] = useState<Data[]>([]);
  const [pageState, setPageState] = useState({
    page: paginationOptions?.currentPage || 1,
    size: paginationOptions?.pageSize || 5,
    total: 0,
  });

  useEffect(() => {
    getData(
      `${remoteDataUrl}?_page=${pageState.page}&_limit=${pageState.size}&_sort=${defaultSort.dataField}&_order=${defaultSort.order}`
    );
  }, []);

  const getData = (url: string) => {
    fetch(url)
      .then((response) => {
        const total = response.headers.get('x-total-count') || '0';
        setPageState((oldPage) => ({ ...oldPage, total: parseInt(total) }));
        return response.json();
      })
      .then((json) => setData(json));
  };

  const updateData = (url: string, data: Data, fetchUrl: string) => {
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then((response) => response.json())
      .then((json) => getData(fetchUrl));
  };

  const deleteData = (url: string, fetchUrl: string) => {
    fetch(url, { method: 'DELETE' })
      .then((response) => response.json())
      .then((json) => getData(fetchUrl));
  };

  const tableChangeHandler: TableChangeHandler<any> = (
    type,
    { data, cellEdit, sortField, sortOrder, page, sizePerPage, filters }
  ) => {
    let url = `${remoteDataUrl}?_page=${page}&_limit=${sizePerPage}&_sort=${sortField}&_order=${sortOrder}`;
    for (const key in filters) url += `&${key}=${filters[key].filterVal}`;
    setPageState((oldPage) => ({ ...oldPage, page: page, size: sizePerPage }));
    switch (type) {
      case 'sort':
        getData(url);
        break;
      case 'pagination':
        getData(url);
        break;
      case 'cellEdit':
        const { rowId, dataField, newValue } = cellEdit;
        const row = data.find((row) => row.id === rowId);
        row[dataField] = newValue;
        updateData(`${remoteDataUrl}/${rowId}`, row, url);
        break;
      case 'filter':
        getData(url);
        break;
    }
  };

  return (
    <Container>
      <BootstrapTable
        remote
        bootstrap4
        keyField='id'
        data={data}
        columns={columns}
        selectRow={{
          mode: 'checkbox',
          onSelect(row, isSelected, rowIndex, e) {
            console.log(`${JSON.stringify(row)}`);
          },
        }}
        defaultSorted={[defaultSort]}
        onTableChange={tableChangeHandler}
        cellEdit={cellEditFactory({ mode: 'dbclick' })}
        filter={filterFactory()}
        pagination={
          paginationOptions &&
          paginationFactory({
            showTotal: true,
            page: pageState.page,
            sizePerPage: pageState.size,
            totalSize: pageState.total,
          })
        }
      />
    </Container>
  );
};

interface Data {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface PaginationOptions {
  currentPage: number;
  pageSize: number;
}

interface DefaultSort {
  dataField: string;
  order: 'asc' | 'desc';
}

interface PropTypes {
  columns: ColumnDescription[];
  remoteDataUrl: string;
  paginationOptions?: PaginationOptions;
  defaultSort?: DefaultSort;
}

export default MyCustomTable;
