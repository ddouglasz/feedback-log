import React from 'react'

interface ButtonProps {
  classes?: string
  name: string
  onclick: () => void
}

const Button = ({ classes, name, onclick }: ButtonProps) => {
  return (
    <button className={classes} type="button" onClick={onclick} data-testid="input-button">
      {name}
    </button>
  )
}

export default Button
