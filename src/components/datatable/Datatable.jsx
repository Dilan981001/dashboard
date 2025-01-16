import './Datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { userColumns, userRows }  from '../../datatablesource';

const paginationModel = { page: 0, pageSize: 5 };
const Datatable = () => {

    
  return (
    <div className='datatable'>
      <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={userRows}
        columns={userColumns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
    </div>
  )
}

export default Datatable
