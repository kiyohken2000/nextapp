import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Posts = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch()
    console.log('loaded')
  },[])

  const fetch = async() => {
    const result = await axios('https://jsonplaceholder.typicode.com/posts')
    setData(result.data)
  }
  return (
    <div>
      {
        data.map((item, i) => {
          return (
            <div key={i}>
              <p>{i}</p>
              <p>{item.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Posts
