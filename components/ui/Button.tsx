import React from 'react'
type ButtonProps = {
  children?: React.ReactNode,
  className?: string,
}
const Button = ({children, className} : ButtonProps) => {
  return (
    <button data-ripple-light={true} className={`${className} text-white min-h-[40px] leading-5 bg-gradient-to-r from-primary  to-secondary rounded-xl text-[14px] px-4 flex items-center`}>{children}</button>
  )
}

export default Button