import React, { FC } from 'react'

const Count: FC<{value: number, className?: string}> = (props) => {
  return (
    <span className={`${props.className} text-xs align-middle text-base font-normal`}>{`( ${props.value} )`}</span>
  )
}

export default Count