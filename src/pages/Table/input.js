import React from 'react'

const Input = ({ read, type, onClick, value }) => {
  return (
    <td>
      <input
        className={read ? 'none__border' : undefined}
        disabled={read}
        value={value}
        onChange={(e) => onClick(e, type)}
      />
    </td>
  )
}

export default Input
