import './productList.css'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { productList as rows } from '../../data/productList'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ProductList = () => {
  const [data, setData] = useState(rows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'product',
      headerName: 'Product',
      width: 150,
      renderCell: (params) => {
        return (
          <div className='productListItem'>
            <img className='productListImage' src={params.row.img} alt='' />
            {params.row.name}
          </div>
        )
      },
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 150,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/products/' + params.row.id}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              disableSelectionOnClick
              className='productDel'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]
  return (
    <div className='productList'>
      <div className='productListTitle'>
        <h2>Product List</h2>
      </div>
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

export default ProductList
