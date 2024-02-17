import React from 'react'
import Icon from '../Icon'
import Count from './Count'
type BadgeProps = {
  iconName?: string,
  iconWidth?: number | string,
  primaryText: string,
  secondaryText?: string,
  className?: string,
  primaryTextStyles?: string,
  count?: number,
}
const Badge = ({
  iconName,
  iconWidth = 24,
  primaryText,
  primaryTextStyles,
  secondaryText,
  className,
  count
}: BadgeProps) => {
  return (
    <div className={`${className} inline-flex items-center rounded-lg bg-neutral md:p-2 text-xs font-medium text-secondary`}>
    {iconName && <Icon name={iconName} width={iconWidth}  />}
    <div className='ml-1'>
      <p className={`text-black text-sm font-bold ${primaryTextStyles}`}>
        {primaryText}
        {count && <Count className='ml-1' value={15}/>}
      </p>
      {secondaryText && <p className='text-xs font-light'>{secondaryText}</p>}
    </div>
  </div>
  )
}

export default Badge