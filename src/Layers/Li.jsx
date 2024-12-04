import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({className,href,children}) => {
  return (
    <li>
        <Link className={` ${className}` } to={href}>
        {children}
        </Link>
    </li>
  )
}

export default Li