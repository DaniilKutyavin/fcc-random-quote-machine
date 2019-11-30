import React from 'react'
import './Button.scss'

export default function Button({ onClick, variant, ...buttonProps }) {
  const className = getClassName(buttonProps.className, variant)
  return <button className={className} onClick={onClick} {...buttonProps} />
}

function getClassName(className, variant) {
  const baseClassName = 'button'

  const variantMapping = {
    tweet: `${baseClassName}__tweet`,
    primary: `${baseClassName}__primary`,
  }
  const variantMappingClassName = variantMapping[variant] || ''

  return `${baseClassName} ${variantMappingClassName} ${className || ''}`
}

Button.ButtonGroup = props => <div className="button-group" {...props} />
