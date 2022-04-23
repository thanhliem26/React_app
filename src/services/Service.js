import axios from 'axios'
import { useState, useEffect } from 'react'
import moment from 'moment'

const GetDataCovid = (url) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const outRequets = axios.CancelToken.source()

    async function fetchData() {
      try {
        let res = await axios.get(url, {
          cancelToken: outRequets.token,
        })
        let data = res && res.data ? res.data : []
        if (data && data.length > 0) {
          data.map((item) => {
            item.Date = moment(item.Date).format('DD/MM/YYYY')
            return item
          })
          data.reverse()
          setData(data)
        }
        setData(res.data)
      } catch (e) {
        console.log(e.message)
      }
    }

    fetchData()

    return () => {
      outRequets.cancel('Request is canceled')
    }
  }, [])

  return { data }
}

export default GetDataCovid
