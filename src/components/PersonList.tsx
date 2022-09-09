//Array of objects
type PersonListProps={
    names:{
        first:string,
        last:string
    }[]
}

// interface PersonListProps{
//     names:{
//         first:string,
//         last:string,
//     }[]
// }

export const PersonList=(props:PersonListProps)=>{
    return(
        <div>
            {
                props.names.map(
                    ({first,last})=>{
                        return <h2 key={first}>{first} {last}</h2>
                    }
                )
            }
        </div>
    )
}