import './Datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { userColumns, userRows }  from '../../datatablesource';
import { Link } from "react-router-dom";
import { useState } from 'react';


const paginationModel = { page: 0, pageSize: 15 };
const Datatable = () => {

  const [data,setData] = useState(userRows)


  const handleDelete = (id)=>{
    setData(data.filter(item=>item.id !==id))
  }

  const actionColumn = [{field:"action" , headerName: "Action", width:200 , renderCell:(params)=>{
    return (
      <div className="cellAction">
         <Link to="/users/test" style={{textDecoration:"none"}}>
        <div className="viewButton">View</div>
        </Link>
        <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
      </div>
    )
  }}] 
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" style={{textDecoration:"none"}} className='link'>
        Add New</Link>
      </div>
      <Paper sx={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={data}
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
