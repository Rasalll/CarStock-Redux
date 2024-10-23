import React,{useState} from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {edit} from '../redux/productSlice'

function Edit() {
  const {id}=useParams()
  const product = useSelector((state) => state.productReducer)
  const existingProduct=product.find((item)=>item.id==id)
  const [unimageurl, setImageurl] = useState(existingProduct ? existingProduct.imageurl : '')
  const [unmodel, setModel] = useState(existingProduct ? existingProduct.model : '')
  const [unmake, setMake] = useState(existingProduct ? existingProduct.make : '')
  const [unprice, setPrice] = useState(existingProduct ? existingProduct.price : '')



  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleUpdate=(event)=>{
    event.preventDefault()
    dispatch(edit(
      {
        id:id,
        imageurl:unimageurl,
        model:unmodel,
        make:unmake,
        price:unprice
      }
    ))
    navigate('/home')
  }
  return (

    <>
      <div className='bg-dark d-flex vh-100 justify-content-center align-items-center '>
        <div className='edit w-50   p-4 shadow rounded'>
          <h1 className='text-primary mb-3'> Edit Stock Details</h1>
          <form onSubmit={handleUpdate}>
            <div>
              <label htmlFor="firstlook" className='text-dark '>Photo Url</label>
              <input value={unimageurl} onChange={(e)=>setImageurl(e.target.value)} type="text" name='photourl' className='form-control  rounded p-3 shadow mb-2' placeholder='Enter Name' />
            </div>
            <div>
              <label htmlFor="price" className='text-dark '>Model</label>
              <input value={unmodel} onChange={(e)=>setModel(e.target.value)} type="text" name='model' className='form-control  rounded p-3 shadow mb-2' placeholder='Enter Category' />
            </div>
            <div>
              <label htmlFor="make" className='text-dark '>Make</label>
              <input value={unmake} onChange={(e)=>setMake(e.target.value)} type="text" name='make' className='form-control  rounded p-3 shadow mb-2' placeholder='Enter Price'/>
            </div>
            <div>
              <label htmlFor="price" className='text-dark '>Price</label>
              <input value={unprice} onChange={(e)=>setPrice(e.target.value)} type="text" name='price' className='form-control  rounded p-3 shadow mb-2' placeholder='Enter Price'/>
            </div>
            <div className='d-flex justify-content-between mt-4'>
              <Link to={"/"} className='btn btn-danger '>Cancel</Link>
              <button className='btn btn-success '>Update</button>
            </div>
          </form>
        </div>
      </div> 
             </>
  )
}

export default Edit