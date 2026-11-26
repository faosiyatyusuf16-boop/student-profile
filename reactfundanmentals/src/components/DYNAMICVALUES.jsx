import React, { useState } from 'react'

export default function DYNAMICVALUES() {

    const [count, setCount] = useState(0)
    const [text, setText] = useState("No Activities completed")
    function counter (){
        if(count == 0){
            setCount(count + 1)
        }
    }
  return (
    <div>

    </div>
  )
}
