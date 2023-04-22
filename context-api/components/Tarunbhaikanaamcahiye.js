import React, { useContext } from 'react'
import { userContext } from '@/context/Context'


const Tarunbhaikanaamcahiye = () => {
    const [tarunname,setTarunname] = useContext(userContext)
    console.log(tarunname.name2)
  return (
    <div>Tarunbhaikanaamcahiye</div>
  )
}

export default Tarunbhaikanaamcahiye