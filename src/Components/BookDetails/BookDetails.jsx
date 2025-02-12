import React from 'react'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import UseAuth from '../UseAuth/UseAuth'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import Swal from 'sweetalert2'

export default function BookDetails() {
  const navigate = useNavigate()
  const { user } = UseAuth()
  const details = useLoaderData()

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value
    const email = form.email.value
    const borrowDate = form.borrowDate.value
    const returnDate = form.returnDate.value
    const image = details.image
    const category = details.category
    const bookName = details.name
    const borrowId = details._id
    form.reset()
    const result = { name, email, borrowDate, returnDate, image, category, bookName, borrowId }
    axios.post("https://assignment-11-server-two-brown.vercel.app/borrowed", result)
      .then((res) => {
        console.log(res.data)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Book Borrowed",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/borrowed-books")
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Already Borrowed",
          showConfirmButton: false,
          timer: 1500
        });
      })

  }





  return (
    <div className='flex items-center py-10 justify-center min-h-[calc(100vh-265px)] '>
      <Helmet>
        <title>Book-Details</title>
      </Helmet>
      <div className='bg-gray-400 p-10 rounded-tr-[100px]'>
        <img className='mx-auto w-60' src={details.image} alt="" />
        <p className='text-xl text-white py-2'>Author: {details.name}</p>
        <p className='text-xl text-white py-2'>Author: {details.author_name}</p>
        <p className='text-xl text-white py-2'>Category: {details.category}</p>
        <p className='text-xl text-white py-2'>Quantity: {details.quantity}</p>
        <p className='text-xl text-white py-2'>Rating: {details.rating}</p>
        <div >

          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button disabled={details.quantity === 0} className="btn w-full my-2 text-lg text-gray-500" onClick={() => document.getElementById('my_modal_1').showModal()}>Borrow</button>
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
                    <span className="label-text">Borrow Date</span>
                  </label>
                  <input name='borrowDate' type="date" placeholder="Borrow Date" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Returning Date</span>
                  </label>
                  <input name='returnDate' type="date" placeholder="Returning Date" className="input input-bordered" required />
                </div>

                <div className="form-control mt-6 ">
                  <button className="btn bg-gray-600 text-white">Submit</button>
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

