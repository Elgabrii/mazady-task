import React, { FC } from 'react'

const Category: FC<{name: string, selected?: boolean}> = ({name, selected=false}) => {
  return (
    <div 
      className={`
        inline-flex 
        items-center 
        rounded-xl 
        py-2 
        px-4
        text-xs 
        font-medium 
        border 
        ${selected ? 'border-secondary bg-neutral text-secondary' :'border-base bg-white text-base'}
      `}
    >
      {name}
    </div>
  )
}

export default Category