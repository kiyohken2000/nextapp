import React, {useEffect} from 'react'

const Button = (props) => {
  const txt = props.txt
  const num = props.num

  useEffect(() => {
    console.log('副作用関数が実行されました！')
  },[])
  
  return (
    <div class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
      <p>{txt}</p>
      <p>{num}</p>
    </div>
  )
}

export default Button
