import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
export default function UpdateForm() {
    const {id} = useParams()
 console.log(id)
 const form1 = useLoaderData()
    const {image,name, author_name, category,rating}= form1 
   
    const handleUpdate =(e)=>{
        e.preventDefault()
        const form = e.target
        const image = form.image.value
        const name = form.name.value
        const authorName = form.authorName.value
        const category = form.category.value
        const rating = form.rating.value
        form.reset()
        console.log(image,name,authorName,category,rating)
       const updateForm={image,name,authorName,category,rating}
       fetch(`http://localhost:5000/update/${id}`,{
        method:"PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(updateForm)
       })
       .then((res)=>res.json())
       .then((data)=>{
        console.log(data)
         Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Book Updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
       })
    }

    const navigate= useNavigate()

  return (
    <div className='pb-20'>
       <Helmet>
            <title>All-books | Update</title>
        </Helmet>
       <h1 className='text-center text-white font-bold text-4xl py-10'>Update  Book</h1>
      <form onSubmit={handleUpdate} className="card-body max-w-[800px] mx-auto bg-gray-600 p-20  rounded-tl-[100px]">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-white">Image</span>
          </label>
          <input defaultValue={image} name='image'  type="text" placeholder="Image URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-white">Name</span>
          </label>
          <input defaultValue={name} name='name'  type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-white">Author Name</span>
          </label>
          <input defaultValue={author_name} name='authorName'  type="text" placeholder="Author Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-white">Category</span>
          </label>
          <input defaultValue={category} name='category'  type="text" placeholder="Category" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-white">Rating</span>
          </label>
          <input defaultValue={rating} name='rating'  type="text" placeholder="Rating" className="input input-bordered" required />
        </div>
       
      
        <div className="form-control mt-6 ">
       {/* <Link onClick={()=>navigate("/all-books")}> <button type='submit'  className="btn btn-primary">Submit</button></Link> */}
       <button type='submit'  className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}
