import { ColumnDescription } from 'react-bootstrap-table-next';
import { textFilter } from 'react-bootstrap-table2-filter';
import Container from 'react-bootstrap/Container';
import MyCustomTable from './MyCustomTable';

const columns: ColumnDescription[] = [
  {
    dataField: 'id',
    text: 'ID',
    hidden: true,
  },
  {
    dataField: 'firstName',
    text: 'First Name',
    filter: textFilter(),
    sort: true,
  },
  {
    dataField: 'lastName',
    text: 'Last Name',
    filter: textFilter(),
    sort: true,
  },
  {
    dataField: 'email',
    text: 'Email',
    filter: textFilter(),
    sort: true,
  },
];

const USERS_API_URL = 'http://localhost:5000/users';

const ExperimentalComponent = () => {
  return (
    <Container>
      <MyCustomTable
        columns={columns}
        remoteDataUrl={USERS_API_URL}
        paginationOptions={{ currentPage: 1, pageSize: 5 }}
      />
    </Container>
  );
};

export default ExperimentalComponent;
