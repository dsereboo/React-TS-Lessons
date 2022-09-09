//To accept react components as children, the react.node prop type
//is considered suitable

type OscarProps={
     children:React.ReactNode,
}


export const Oscar=(props:OscarProps)=>{
    return(
        <div>
            {props.children}
        </div>
    )
}