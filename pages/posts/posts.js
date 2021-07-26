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
            <div key={i} class="m-2.5 border-black border-solid divide-y-2">
              <p class="bg-gray-100">{i}</p>
              <p class="bg-gray-200">{item.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Posts
