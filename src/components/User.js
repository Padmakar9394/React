import React, { useState } from 'react'

const User = ({name}) => {
    const [count1] = useState(0);
    const [count2] = useState(1);
  return (
    <div>
        <p>Count={count1}</p>
        <p>Count2={count2}</p>
        <h1>Name: {name}</h1>
        <h2>Location: Pune</h2>
        <h3>Contact: @Padmakar9394</h3>
    </div>
  )
}

export default User;