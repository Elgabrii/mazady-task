import React, { ButtonHTMLAttributes } from 'react'
type ButtonProps = {
  children?: React.ReactNode,
  className?: string,
  type?: 'submit' | 'reset' | 'button',
}
const Button = ({children, className, type = 'button'} : ButtonProps) => {
  return (
    <button type={type} className={`${className} text-white min-h-[40px] leading-5 bg-gradient-to-r from-primary  to-secondary rounded-xl text-[14px] px-4 flex items-center`}>{children}</button>
  )
}

export default Button