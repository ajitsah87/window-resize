import React, { useState, useEffect } from 'react';

function Count() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count >0) {
            
            document.title = `Count me (${count})`
        }else{
            document.title = `Count  `

        }
    },[count])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>click</button>
        </div>
    )
}

export default Count






