import './product.css'
import { Link } from 'react-router-dom'
import Chart from '../../components/charts/Chart'
import { productdata } from '../../data/product'
import { Publish } from '@material-ui/icons'

const Product = () => {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newProduct'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='prductTop'>
        <div className='productTopLeft'>
          <Chart data={productdata} dataKey='Sales' title='Sales Performance' />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img
              className='productInfoImg'
              src='https://www.gizmochina.com/wp-content/uploads/2020/05/iphone-12-pro-max-family-hero-all-600x600.jpg'
              alt='Product'
            />
            <span className='productName'>iPhone 12</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Id:</span>
              <span className='productInfoValue'>123</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Sales:</span>
              <span className='productInfoValue'>213</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Active:</span>
              <span className='productInfoValue'>Yes</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>In Stock:</span>
              <span className='productInfoValue'>No</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>Product Name</label>
            <input type='text' placeholder='iPhone 12' />
            <label>In Stock</label>
            <select name='inStock' id='inStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label>Active</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img
                className='productUploadImg'
                src='https://www.gizmochina.com/wp-content/uploads/2020/05/iphone-12-pro-max-family-hero-all-600x600.jpg'
                alt='product'
              />
              <label for='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button className='productButton'>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product
