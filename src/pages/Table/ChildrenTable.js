import { useState } from 'react'
import { editData } from '../../store/reducer/tableReducer'
import { useDispatch, useSelector } from 'react-redux'
import Input from './input'
import { Link } from 'react-router-dom'

const ChildrenTable = ({ id }) => {
  const dataItem = useSelector((state) => state.tableReducer.data[id])
  const { Date, Confirmed, Active, Deaths, Recovered } = dataItem

  const [type, setType] = useState({
    date: Date,
    confirm: Confirmed,
    Death: Deaths,
    Recovere: Recovered,
    active: Active,
  })

  console.log('children')
  let dispatch = useDispatch()
  const [read, setRead] = useState(true)

  const handleEdit = () => {
    setRead((prev) => !prev)
    if (!read) {
      dispatch(editData({ type, id }))
    }
  }
  const handleChange = (e, type) => {
    switch (type) {
      case 'Date':
        setType((prev) => {
          return {
            ...prev,
            date: e.target.value,
          }
        })
        break
      case 'Confirmed':
        setType((prev) => {
          return {
            ...prev,
            confirm: e.target.value,
          }
        })
        break
      case 'Active':
        setType((prev) => {
          return {
            ...prev,
            active: e.target.value,
          }
        })
        break
      case 'Deaths':
        setType((prev) => {
          return {
            ...prev,
            Death: e.target.value,
          }
        })
        break
      case 'Recovered':
        setType((prev) => {
          return {
            ...prev,
            Recovere: e.target.value,
          }
        })
        break
      default:
        throw new Error('Invalid Type')
    }
  }

  return (
    <tr key={id}>
      <Input
        read={read}
        type={'Date'}
        value={type.date}
        onClick={handleChange}
      />
      <Input
        read={read}
        type={'Confirmed'}
        value={type.confirm}
        onClick={handleChange}
      />
      <Input
        read={read}
        type={'Active'}
        value={type.active}
        onClick={handleChange}
      />
      <Input
        read={read}
        type={'Deaths'}
        value={type.Death}
        onClick={handleChange}
      />
      <Input
        read={read}
        type={'Recovered'}
        value={type.Recovere}
        onClick={handleChange}
      />
      <td>
        {read && <button onClick={handleEdit}>Edit</button>}
        {!read && <button onClick={handleEdit}>Save</button>}
        <button>
          <Link to={`/table/${id}`}>Detail</Link>
        </button>
      </td>
    </tr>
  )
}

export default ChildrenTable
