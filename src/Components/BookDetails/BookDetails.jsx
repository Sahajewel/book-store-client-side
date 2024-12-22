import React from 'react'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import UseAuth from '../UseAuth/UseAuth'

export default function BookDetails() {
const navigate= useNavigate()
const {user} = UseAuth()
   const details = useLoaderData()
const handleDecrease=()=>{
    
    return (details.quantity)-1
}
   const handleSubmitForm=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const date = form.date.value
       
        
   }
  return (
    <div className='flex items-center py-10 justify-center min-h-[calc(100vh-265px)] '>
     <div className='bg-gray-400 p-10 rounded-tr-[100px]'>
         <img className='mx-auto w-60' src={details.image} alt="" />
         <p className='text-xl text-white py-2'>Author: {details.name}</p>
         <p className='text-xl text-white py-2'>Author: {details.author_name}</p>
         <p className='text-xl text-white py-2'>Author: {details.category}</p>
         <p className='text-xl text-white py-2'>Quantity: {details.quantity}</p>
         <p className='text-xl text-white py-2'>Rating: {details.rating}</p>
         <div >
        
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn w-full my-2 text-lg text-purple-500" onClick={()=>document.getElementById('my_modal_1').showModal()}>Borrow</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
  
  <form onSubmit={handleSubmitForm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' defaultValue={user?.displayName} type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' defaultValue={user?.email} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Returning Date</span>
          </label>
          <input name='date'  type="date" placeholder="Returning Date" className="input input-bordered" required />
        </div>
      
        <div className="form-control mt-6 ">
          <button onClick={handleDecrease}  className="btn btn-primary">Submit</button>
        </div>
      </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
         
         </div>
     </div>
    </div>
  )
}

