import React,{useState,useEffect} from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    const [count2,setCount2]=useState(0)
    useEffect(()=>{
        console.log("mounting")
       console.log("coun1.."+count)
       console.log("cont2.."+count2)
       return(()=>{
           console.log("clean up"+count)
       })
    },[count,count2])
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <h1>iam a component {count} </h1>

            <button onClick={()=>setCount2(count2+1)}>Increment</button>
            <h1>iam a component {count2} </h1>
        </div>
    )
}

export default Counter

