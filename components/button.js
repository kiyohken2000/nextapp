import React, {useEffect} from 'react'

const Button = (props) => {
  const txt = props.txt
  const num = props.num

  useEffect(() => {
    console.log('副作用関数が実行されました！')
  },[])
  
  return (
    <div>
      <p>{txt}</p>
      <p>{num}</p>
    </div>
  )
}

export default Button
