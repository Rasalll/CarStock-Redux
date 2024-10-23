import React from 'react'
import { useState } from 'react';
import { add } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Add() {

  const [imageurl, setimageUrl] = useState("")
  const [model, setModel] = useState("")
  const [make, setMake] = useState("")
  const [price, setPrice] = useState("")



  const product = useSelector((state) => state.productReducer)
  console.log(product)
  const dispatch = useDispatch();
  const navigate=useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add({ id: product[product.length - 1].id + 1, imageurl, model, make,price }))
    navigate('/home')
  }

  return (
    <>
      <div className='bg-dark d-flex vh-100 justify-content-center align-items-center'>
        <div className='  p-5 shadow w-50'>
          <h3 className='text-light mb-3'>Add New Stock Details:</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="imageurl" className='text-light'>Photo Url</label>
              <input type="text" name='imageurl' className='form-control form-signin rounded p-3 shadow mb-2' placeholder='Add photo url' onChange={e=>setimageUrl(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="model" className='text-light'>Model</label>
              <input type="text" name='model' className='form-control form-signin rounded p-3 shadow mb-2' placeholder='Add model name' onChange={e=>setModel(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="make" className='text-light'>Make</label>
              <input type="text" name='make' className='form-control form-signin rounded p-3 shadow mb-2' placeholder='enter make/company' onChange={e=>setMake(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="price" className='text-light'>Price</label>
              <input type="text" name='price' className='form-control form-signin rounded p-3 shadow mb-2' placeholder='Enter Price' onChange={e=>setPrice(e.target.value)}/>
            </div>
            <div className='d-flex justify-content-between mt-4'>
              <Link to={"/"} className='btn btn-danger '>Cancel</Link>
              <button className='btn btn-primary '>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Add