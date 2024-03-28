import React from 'react';

const Contact = () => {
  return (
    <div>
        <h1>This is Contact Page</h1>
        <form className='flex flex-row items-center'>
           <input className="mx-2 px-2 py-1 outline-none border border-1 border-gray-500" type="text" placeholder="name" />
           <input className="px-2 py-1 mx-2 outline-none border border-1 border-gray-500" type="text" placeholder="surname" />
           <button className='border border-2 rounded-md bg-gray-700 px-4 py-2 text-white' type="submit">
             Submit
           </button>
         </form>
    </div>
  )
}

export default Contact;