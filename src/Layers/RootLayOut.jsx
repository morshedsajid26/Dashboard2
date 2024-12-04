import React from 'react'
import Sidebar from '../Component/Sidebar'
import { Outlet } from 'react-router-dom'

const RootLayOut = () => {
  return (
    <div className='h-screen bg-[#EEEEFE]  py-14 '>
        <div className='shape w-[1153px] h-full bg-gray-100 mx-auto flex overflow-hidden relative'>
            <Sidebar/>

            <main className='bg-[#FCFBFC] w-full h-full pr-8 grid grid-rows-7 '>
                <h2 className=' py-8 border-b border-[#CBCBCB] pl-8'> RELATÓRIO DE VENDAS</h2>

                <div className=' row-span-6 flex flex-col justify-between pb-6 pt-3 pl-8'>
                    <div className="top h-full w-full">
                        <Outlet/>

                    </div>

                    <div className="bottom w-full h-[45px] bg-white shadow rounded-full mt-6">
                        
                    </div>
                </div>


            </main>
        </div>

    </div>
  )
}

export default RootLayOut