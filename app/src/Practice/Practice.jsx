import React from 'react'
import {useState} from 'react';
import "./Practice.css"
const Practice = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
    <h2
      style={{
        backgroundColor: count > 6 ? 'lime' : 'salmon',
        color: count > 6 ? 'white' : 'powderblue',
      }}
    >
      Count: {count}
    </h2>

    <h2
      style={
        count > 6
          ? {backgroundColor: 'pink', color: 'white'}
          : {backgroundColor: 'salmon', color: 'powderblue'}
      }
    >   
      Count: {count}
    </h2>
    <h2></h2>

    <button onClick={() => setCount(current => current + 1)}>
      Increment
    </button>
  </div>
  )
}

export default Practice