import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
   
    <div className="vh-100 position-relative" style={{ backgroundColor: '#12343b' }}>
     <img 
         src="https://wallpapers.com/images/hd/4k-ultra-hd-porsche-86xozzednxv2xhdu.jpg"  alt="" className="img-fluid w-100" 
         style={{ objectFit: 'cover', height: '100%' }} />
 
     <div className='container ms-5 position-absolute text-light w-50' style={{ top: '50px' }}>
         <h1 className=' text-light' style={{ fontSize: '50px',fontWeight:'100' }}>
             Drive Smart, Save Big <br />
             Shop <span className='text-primary'> Rasal's Cars</span> Today!
         </h1>
 
         <Link className='btn btn-light d-grid mt-4' to={'/home'}>
             View Catalogue
         </Link>
     </div>
 </div>
 
 
 
       
     </>
  )
}

export default Landing