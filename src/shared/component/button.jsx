// @flow

import React from 'react'

type Props = {
  label: string,
  handleClick: Function,
}

const Button = ({ label, handleClick }: Props) => (
  // eslint-disable-next-line
  <button onClick={handleClick} className="btn btn-primary"
  // eslint-disable-next-line
  type="button" role="button">{label}</button>
)

export default Button
