import React, { useContext } from 'react'
import { userContext } from '@/context/Context'

const Naamcahiye = () => {
    const [kuchbhi,setKuchbhi] = useContext(userContext)
    console.log(kuchbhi.name1)
  return (
    <div>Naamcahiye</div>
  )
}

export default Naamcahiye