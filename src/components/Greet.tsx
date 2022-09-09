type GreetProps={
    name:string
    numOfMessages:number
    isLoggedIn:boolean,
}

// interface GreetProps{
//     name:string,
// }

export const Greet=(props:GreetProps)=>{
    return(
        <div>
            {
                props.isLoggedIn?
                <h2>Welcome {props.name}, you have {props.numOfMessages} messages</h2>
                :
                <h2>Welcome guest</h2>
            }
        
        </div>
    )
}