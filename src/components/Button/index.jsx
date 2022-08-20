import React from 'react'
import './button.scss';

function Button({children, classN, onclick}) {
  return (
    <button className={`${classN} button`} onClick={onclick}>
        {children}
    </button>
  )
}

export default Button