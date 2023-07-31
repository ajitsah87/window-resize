import React, { useContext } from 'react'
import { GlobalInfo } from './App'
function SuperChild() {
    const { appColor } = useContext(GlobalInfo)
    console.log("appColor", appColor)
    return (
        <div>
            <h1 style={{color:appColor}}>the  Super child context </h1>
        </div>
    )
}

export default SuperChild;

