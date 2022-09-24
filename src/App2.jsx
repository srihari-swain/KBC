import React,{useState} from "react"
function App2(){
    const [count,setvalue]=useState(0)
     const handler=()=>{
        setvalue(count+1);
    }

    return(
        <>
        <h1>count up :{count}</h1>
        <button onClick={handler}>change</button>
        </>
    )
}
export default App2