import React, {useEffect, useState} from 'react'
import Button from '../components/button'
import { useRouter } from 'next/router'

const Hello = () => {
  const router = useRouter()
  const para = router.query.input
  
  return (
    <div>
      <h1> Hello World </h1>
      <Button txt={para} num={12234} />
    </div>
  )
};

export default Hello;