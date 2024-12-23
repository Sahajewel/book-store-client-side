import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet';

export default function AddBook() {
    const handleAddBook=(e)=>{
        e.preventDefault();
        const formData =new FormData(e.target)
        const data = Object.fromEntries(formData.entries());
        e.target.reset()
      axios.post("http://localhost:5000/add-book",data)
      .then((result)=>{
        console.log(result.data)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Book Added",
            showConfirmButton: false,
            timer: 1500
          });
      })
       
       
    }
  return (
    <div className='pb-20'>
         <Helmet>
            <title>Add-Book</title>
        </Helmet>
        <h1 className='text-center text-white font-bold text-4xl py-10'>Add  Book</h1>
     <form onSubmit={handleAddBook} className="card-body max-w-[800px] mx-auto bg-gray-600 p-20  rounded-tl-[100px]">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white text-xl">Image</span>
          </label>
          <input name='image'  type="text" placeholder="Image URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white text-xl">Name</span>
          </label>
          <input name='name'  type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white text-xl">Author Name</span>
          </label>
          <input name='authorName'  type="text" placeholder="Author Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white text-xl">Quantity</span>
          </label>
          <input name='quantity'  type="text" placeholder="Quantity" className="input input-bordered" required />
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text text-white text-xl">Category</span>
          </label>
        <select defaultValue="Category" name='category' className="select select-primary w-full ">
                      
                        <option disabled>Category</option>
                        <option value="novel">Novel</option>
                        <option value="thiller">Thriller</option>
                        <option value="history">History</option>
                        <option value="drama">Drama</option>
                        <option value="science Fiction">Science Fiction</option>
                       
                </select>
                </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white text-xl">Short Description</span>
          </label>
          <input name='description'  type="text" placeholder="Short Description" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white text-xl">Rating</span>
          </label>
          <input name='rating'  type="number" min="1"  max="5" placeholder="Rating" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white text-xl"> Wright Content</span>
          </label>
          <textarea name='content' className="textarea textarea-primary" placeholder="Wright about Book Content"></textarea>
        </div>
       
        <div className="form-control mt-6">
     
       <button type='submit'  className="btn btn-primary">Add Book</button>
        </div>
      </form>
    </div>
  )
}
