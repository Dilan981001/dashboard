import './Datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { userColumns, userRows }  from '../../datatablesource';

const paginationModel = { page: 0, pageSize: 15 };
const Datatable = () => {

  const actionColumn = [{field:"action" , headerName: "Action", width:200 , renderCell:()=>{
    return (
      <div className="cellAction">
        <div className="viewButton">View</div>
        <div className="deleteButton">Delete</div>
      </div>
    )
  }}] 
  return (
    <div className='datatable'>
      <Paper sx={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 15]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
    </div>
  )
}

export default Datatable
