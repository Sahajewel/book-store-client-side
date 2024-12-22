import React from 'react'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom'

export default function UpdateForm() {
    const {id} = useParams()
 console.log(id)
    const form1 = useLoaderData()
    console.log(form1)
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
       })
    }

    const navigate= useNavigate()

  return (
    <div>
      <form onSubmit={handleUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input name='image'  type="text" placeholder="Image URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name'  type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Author Name</span>
          </label>
          <input name='authorName'  type="text" placeholder="Author Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input name='category'  type="text" placeholder="Category" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input name='rating'  type="text" placeholder="Rating" className="input input-bordered" required />
        </div>
       
      
        <div className="form-control mt-6 ">
       {/* <Link onClick={()=>navigate("/all-books")}> <button type='submit'  className="btn btn-primary">Submit</button></Link> */}
       <button type='submit'  className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}
