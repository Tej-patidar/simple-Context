import React, { useContext } from 'react'
import { userContext } from '@/context/Context'
import Naamcahiye from '@/components/naamcahiye'
import Tarunbhaikanaamcahiye from '@/components/Tarunbhaikanaamcahiye'


const index = () => {
  const [name,setName] =  useContext(userContext)
  console.log(name)
  return (
    <div>
        <Naamcahiye/>
        <Tarunbhaikanaamcahiye/>
    </div>
  )
}

export default index