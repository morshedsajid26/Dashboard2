import React from 'react'
import { Link } from 'react-router-dom'
import Li from '../Layers/Li'

const Sidebar = () => {
  return (
    <div className='w-[86px] h-full  flex items-center justify-center border-r border-[#CBCBCB]'>
    
  <ul className='flex flex-col gap-7'>
    
        <Li >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#cbcbcb" fill="none">
    <path d="M7.08848 4.76364L6.08847 5.54453C4.57182 6.72887 3.81348 7.32105 3.40674 8.15601C3 8.99097 3 9.95552 3 11.8846V13.9767C3 17.763 3 19.6562 4.17157 20.8325C5.11466 21.7793 6.52043 21.964 9 22V18.0057C9 17.0738 9 16.6078 9.15224 16.2403C9.35523 15.7502 9.74458 15.3609 10.2346 15.1579C10.6022 15.0057 11.0681 15.0057 12 15.0057C12.9319 15.0057 13.3978 15.0057 13.7654 15.1579C14.2554 15.3609 14.6448 15.7502 14.8478 16.2403C15 16.6078 15 17.0738 15 18.0057V22C17.4796 21.964 18.8853 21.7793 19.8284 20.8325C21 19.6562 21 17.763 21 13.9767V11.8846C21 9.95552 21 8.99097 20.5933 8.15601C20.1865 7.32105 19.4282 6.72887 17.9115 5.54453L16.9115 4.76364C14.5521 2.92121 13.3724 2 12 2C10.6276 2 9.44787 2.92121 7.08848 4.76364Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        </svg>
        </Li>  

        <Li href='/timecircle'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#cbcbcb" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
    <path d="M12 8V12L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

        </Li>

    
        <Li href='/chart'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#cbcbcb" fill="none">
    <path d="M7 17L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M12 17L12 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M17 17L17 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    </svg>
        </Li>
    

  
        <Li href='/bag'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#cbcbcb" fill="none">
    <path d="M3.06164 14.4413L3.42688 12.2985C3.85856 9.76583 4.0744 8.49951 4.92914 7.74975C5.78389 7 7.01171 7 9.46734 7H14.5327C16.9883 7 18.2161 7 19.0709 7.74975C19.9256 8.49951 20.1414 9.76583 20.5731 12.2985L20.9384 14.4413C21.5357 17.946 21.8344 19.6983 20.9147 20.8491C19.995 22 18.2959 22 14.8979 22H9.1021C5.70406 22 4.00504 22 3.08533 20.8491C2.16562 19.6983 2.4643 17.946 3.06164 14.4413Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M7.5 9L7.71501 5.98983C7.87559 3.74176 9.7462 2 12 2C14.2538 2 16.1244 3.74176 16.285 5.98983L16.5 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
        </Li>
    

    
        <Li href='/paper'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#cbcbcb" fill="none">
    <path d="M20.4999 14V10C20.4999 6.22876 20.4999 4.34315 19.3284 3.17157C18.1568 2 16.2712 2 12.4999 2H11.5C7.72883 2 5.84323 2 4.67166 3.17156C3.50008 4.34312 3.50007 6.22872 3.50004 9.99993L3.5 13.9999C3.49997 17.7712 3.49995 19.6568 4.67153 20.8284C5.8431 22 7.72873 22 11.5 22H12.4999C16.2712 22 18.1568 22 19.3284 20.8284C20.4999 19.6569 20.4999 17.7712 20.4999 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8 7H16M8 12H16M8 17L12 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
        </Li>
    

    
        <Li href='/user'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#cbcbcb" fill="none">
    <path d="M18.6161 20H19.1063C20.2561 20 21.1707 19.4761 21.9919 18.7436C24.078 16.8826 19.1741 15 17.5 15M15.5 5.06877C15.7271 5.02373 15.9629 5 16.2048 5C18.0247 5 19.5 6.34315 19.5 8C19.5 9.65685 18.0247 11 16.2048 11C15.9629 11 15.7271 10.9763 15.5 10.9312" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M4.48131 16.1112C3.30234 16.743 0.211137 18.0331 2.09388 19.6474C3.01359 20.436 4.03791 21 5.32572 21H12.6743C13.9621 21 14.9864 20.436 15.9061 19.6474C17.7889 18.0331 14.6977 16.743 13.5187 16.1112C10.754 14.6296 7.24599 14.6296 4.48131 16.1112Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M13 7.5C13 9.70914 11.2091 11.5 9 11.5C6.79086 11.5 5 9.70914 5 7.5C5 5.29086 6.79086 3.5 9 3.5C11.2091 3.5 13 5.29086 13 7.5Z" stroke="currentColor" stroke-width="1.5" />
</svg>
        </Li>
  
  </ul>
</div>
  )
}

export default Sidebar