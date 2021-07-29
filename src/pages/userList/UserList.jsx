import './userList.css'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { userList as rows } from '../../data/userList'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserList = () => {
  const [data, setData] = useState(rows)
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'user',
      headerName: 'User',
      width: 150,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img className='userListImage' src={params.row.avatar} alt='' />
            {params.row.username}
          </div>
        )
      },
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/users/' + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              disableSelectionOnClick
              className='userDel'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={4}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default UserList
