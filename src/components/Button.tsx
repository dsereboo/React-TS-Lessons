//When button deosn't return any value or require parameters,
//it can be set to a void function

import React from "react"

//When event param is required, the React.MouseEvent is suitable
//HMTL button generic may be used if specifity is required/desired
type ButtonProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>, id:number)=>void
}

export const Button=(props:ButtonProps)=>{
    return(
        <button onClick={(event)=>props.handleClick(event,1)}>
            Click Me!!
        </button>
    )
}