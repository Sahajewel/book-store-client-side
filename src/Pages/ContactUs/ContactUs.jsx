import React from 'react'
import { Helmet } from 'react-helmet'

export default function ContactUs() {
    
  return (
    <div className='bg-gray-700 flex flex-col justify-center items-center min-h-[calc(100vh-280px)] text-white'>
          <Helmet>
            <title>Contact Us</title>
        </Helmet>
        <h1 className="text-4xl font-bold mb-4 text-center py-10 text-white">Contact Us</h1>
    <p className='text-lg mb-2'>We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help.</p>

            <p className='mb-2 text-lg'>Email Us:
                For inquiries or support:
                📧 sahajewel@gmail.com
            </p>
            <p>
            Call Us:
                For immediate assistance:
                📞 080-5052-6878

            </p>

            <p className='mb-2 text-lg'>Visit Us:
            If you'd like to visit us in person, our store is located at:
            📍 Saitama,Tokyo, Japan
            </p>


            <p className='text-lg'>
                     Our team is always ready to assist you, and we strive to respond to all inquiries within 24 hours.
            </p>
    </div>
  )
}
