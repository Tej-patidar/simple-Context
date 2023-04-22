import React, { createContext, useState } from 'react'
export const userContext = createContext(null)

const Context = (props) => {
  const [bhaikanaam, setBhaikanaam] = useState({
    name1:"deepak bhai",
    name2:"tarun patidar bhai",
    name3:'dhanesh bhaiya'
  })
  return (
    <userContext.Provider value={[bhaikanaam, setBhaikanaam]}>
        {props.children}
    </userContext.Provider>
  )
}

export default Context