import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { delet } from '../redux/productSlice';
import { Link } from 'react-router-dom';

function Home() {
  const stocks = useSelector((state) => state.productReducer)
  console.log(stocks)
  const dispatch = useDispatch()

 
  return (
    <>
      <div className=' d-flex justify-content-center align-items-center bg-dark vh-100'>
        <div className='container shadow  rounded'>
          <Link to={'/add'} className='btn btn-dark my-4 '>
          + Add Stock
          </Link>


          <div>
            {
              stocks?.length > 0 ?
                <Table className='table table-bordered table-striped table-hover table-responsive table-dark'>
                  <thead>
                    <tr className='row1'>
                    <th className='text-light text-center p-3'>Stock No</th>
                      <th className='text-light text-center p-3'>FIRST LOOK</th>
                      <th className='text-light text-center p-3'>MODEL</th>
                      <th className='text-light text-center p-3'>MAKE</th>
                      <th className='text-light text-center p-3'>PRICE</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      stocks?.map((item, index) => (
                        <tr key={index} className='row2'>
                          <td className='text-light text-center p-3'>{item?.id}</td>
                          <td>
                          <img src={item.imageurl} alt=""   className="img-fluid" style={{height:'250px'}} />

                          </td>
                          <td className='text-light text-center p-3'>{item?.model}</td>
                          <td className='text-light text-center p-3'>{item?.make}</td>

                          <td className='text-light text-center p-3'>
                            <i className="fa-solid fa-indian-rupee-sign" />{item?.price}
                          </td>
                          <td className='text-primary text-center p-3'>
                            <Link to={`/edit/${item.id}`} className='btn btn-light mt-1 me-2'>
                            <i className="fa-solid fa-pen " style={{ color: "#0000ff" }} />
                              </Link>
                            <button className='btn btn-light mt-1 me-2' onClick={() => { dispatch(delet({ id: item.id })) }}>
                            <i className="fa-solid fa-trash " style={{ color: "#a40e0e" }} />
                            </button>
                          </td>
                        </tr>
                      ))
                    }

                  </tbody>
                </Table>
                :

                <h3>No products yet!!</h3>

            }

          </div>

        </div>
      </div>
    </>
  )
}

export default Home