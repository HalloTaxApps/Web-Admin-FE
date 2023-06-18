import React from 'react'
import PageLayout from '../../PageLayout'

const EditPralogin = () => {
  return (
    <PageLayout>
      <form className='editpralogin'>
        <div className='flex flex-col text- py-2'>
          <label>Name</label>
          <input className='rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none' type="string" />
        </div>
        <div className='flex flex-col text- py-2'>
          <label>Image</label>
          <input className='rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none' type="string" />
        </div>
        <div className='flex flex-col text- py-2'>
          <label>Description</label>
          <input className='rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none' type="string" />
        </div>
        <button className='w-full my-5 py-2 bg-[#E66099] text-white rounded-lg'>Edit</button>
      </form>
    </PageLayout>
  )
}

export default EditPralogin