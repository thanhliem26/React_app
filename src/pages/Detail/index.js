import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Index = () => {
  let id = useParams()
  console.log(id.id)
  const dataItem = useSelector((state) => state.tableReducer.data[id.id])
  const { Date, Confirmed, Active, Deaths, Recovered } = dataItem
  console.log(Date, Confirmed, Active, Deaths, Recovered)

  return (
    <div
      style={{
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ padding: 20 }}>Date: {Date}</h1>
      <h1 style={{ padding: 20 }}>Confirmed: {Confirmed}</h1>
      <h1 style={{ padding: 20 }}>Active: {Active}</h1>
      <h1 style={{ padding: 20 }}>Deaths: {Deaths}</h1>
      <h1 style={{ padding: 20 }}>Recovered: {Recovered}</h1>
    </div>
  )
}

export default Index
