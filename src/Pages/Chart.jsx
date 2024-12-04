import React from 'react'

const Chart = () => {
  return (
    <div className='h-full w-full grid grid-cols-5 grid-rows-3 gap-5'>
      <div className='bg-white shadow rounded-xl'>1</div>
      <div className='bg-white shadow rounded-xl'>2</div>
      <div className='bg-white shadow rounded-xl'>3</div>
      <div className='bg-white shadow rounded-xl'>4</div>
      <div className='bg-white shadow rounded-xl'>5</div>
      <div className='bg-gradient-to-b from-[#6434F8] to-[#312787] shadow rounded-xl row-span-2 col-span-1'></div>
      <div className='bg-white shadow rounded-xl row-span-2 col-span-1 mt-[30px]'>7</div>
      <div className='bg-white shadow rounded-xl row-span-2 col-span-3'>8</div>
    </div>
  )
}

export default Chart