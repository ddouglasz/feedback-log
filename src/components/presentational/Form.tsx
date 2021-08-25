import React from 'react'

interface IFormProps {
  type: string
  value: string
  classes?: string
  placeHolder: string
  onblur: () => void
  onchange: (event: { preventDefault: () => void; target: { value: string } }) => void
  onsubmit: (event: { preventDefault: () => void }) => void
}

const Form = ({ classes, onchange, onblur, value, type, placeHolder, onsubmit }: IFormProps) => {
  return (
    <form onSubmit={onsubmit} action="">
      <input
        placeholder={placeHolder}
        className={classes}
        type={type}
        onChange={onchange}
        onBlur={onblur}
        value={value}
      />
    </form>
  )
}

export default Form
