//For valid css properties to use as types React.CSSProperties is used

type ContainerProps={
    styles: React.CSSProperties
}


export const Container=(props:ContainerProps)=>{
    return(
        <div style={props.styles}>
            Hey you good?
        </div>
    )
}