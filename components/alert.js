import React, {useEffect} from 'react'

const Alert = (props) => {
  const title = props.title
  const body = props.body

  const showAlert = (i) => {
    alert(i)
  }

  return (
    <div className="content-between">
      <button onClick={() => showAlert(title)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        title
      </button>
      <button onClick={() => showAlert(body)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        body
      </button>
    </div>
  )
}

export default Alert
