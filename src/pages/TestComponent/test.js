import React from 'react'

const Test = ({ item, onClick }) => {
  console.log('child')
  return (
    <div>
      <ul key={item.id}>
        <li style={{ color: 'white' }}>{item.name}</li>
        <li style={{ color: 'white' }}>{item.age}</li>
        <button onClick={(e) => onClick(e, item.id)}>ON CLICK</button>
      </ul>
    </div>
  )
}

export default Test
