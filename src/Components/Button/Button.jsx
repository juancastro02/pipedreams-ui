import React from 'react'
import './Button.css'

const Button = ({ action, current, setCurrent, text }) => {

  const onClick = () => {
    if (action === 'next'){
      setCurrent((curr) => curr + 1)
    } else {
      setCurrent((curr) => curr - 1)
    }
  }

  const disableAction = () => {
    if (action === 'previous' && current === 1){
      return true
    } else if (action === 'next' && current === 5){
      return true
    }
    return false
  }

  return (
    <button disabled={disableAction()} onClick={onClick} type="button" className="btn btn-primary button-width">{text}</button>
  )
}

export default Button