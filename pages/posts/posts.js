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
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
      {
        data.map((item, i) => {
          return (
            <div key={i} className="max-w-xs rounded overflow-hidden shadow-lg my-2">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-grey-darker text-base">
                  {item.body}
                </p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Posts
