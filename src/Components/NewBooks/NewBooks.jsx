import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function NewBooks() {
    const book = useLoaderData()
    console.log(book)
  return (
    <div>
      new books
    </div>
  )
}
