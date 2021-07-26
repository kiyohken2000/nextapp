import React, {useEffect} from 'react'
import { useRouter } from 'next/router'
import Alert from '../../components/alert'

const Detail = () => {
  const router = useRouter()
  const title = router.query.title
  const body = router.query.body

  useEffect(() => {
    console.log('loaded')
  },[])

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-grey-darker text-base">
          {body}
        </p>
         <div className="justify-items-center">
          <Alert title={title} body={body}/>
        </div>
      </div>
    </div>
  )
}

export default Detail
