import { useDispatch, useSelector } from 'react-redux'
import './Table.scss'
import { useEffect, memo } from 'react'
import { fetchDataCovid } from '../../store/reducer/tableReducer'
import ChildrenTable from './ChildrenTable'
const Table = () => {
  const dispatch = useDispatch()
  const dataCovid = useSelector((state) => state.tableReducer.ids)
  console.log('parent')

  useEffect(() => {
    dispatch(fetchDataCovid())
  }, [dispatch])

  return (
    <div className="Table">
      <h1>Covid tracking Vietnamese</h1>

      <table id="table__redux">
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item, index) => {
              return <ChildrenTable key={index} id={item} />
            })}
        </tbody>
      </table>
    </div>
  )
}

export default memo(Table)
