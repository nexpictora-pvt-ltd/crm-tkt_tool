import { DataGrid, GridColDef } from '@mui/x-data-grid';
import '../Table/service.scss'; // Import your CSS file

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Full name', width: 325 },
  {
    field: 'age',
    headerName: 'Phone Number',
    type: 'number',
    width: 325,
    headerAlign: 'left',
    align:'left'
  },
  {
    field: 'email',
    headerName: 'Email',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 520,
    type: 'email',
  },
];

const rows = [
  { id: 1,  firstName: 'Jon', age: 354543456767 ,email:'ishapathak515@gmail.com'},
  { id: 2,  firstName: 'Cersei', age: 42123455657,email:'ishapathak515@gmail.com' },
  { id: 3,  firstName: 'Jaime', age: 453456789087 ,email:'ishapathak515@gmail.com'},
  { id: 4, firstName: 'Arya', age: 16 },
  { id: 5,  firstName: 'Daenerys', age: null },
  { id: 6,  firstName: null, age: 150 },
  { id: 7,  firstName: 'Ferrara', age: 44 },
  { id: 8,  firstName: 'Rossini', age: 36 },
  { id: 9,  firstName: 'Harvey', age: 65 },
];

export default function CustomerTable() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
         // Apply the CSS class
      />
    </div>
  );
}
